// Caimeo - minimal client-side JS
(function () {
  'use strict';

  // ---- Mobile nav toggle ----
  const toggle = document.querySelector('.nav-toggle');
  // Target the top-level nav (direct child of body, outside header stacking context)
  const nav = document.querySelector('body > .site-nav');
  const overlay = document.querySelector('.nav-overlay');

  if (toggle && nav) {
    const getNavControls = () => Array.from(
      nav.querySelectorAll('a[href], button:not([disabled]), [tabindex]')
    );
    const setNavControlsTabbable = (isTabbable) => {
      getNavControls().forEach((control) => {
        if (isTabbable) {
          const previous = control.dataset.navTabindex;
          if (previous === 'none') control.removeAttribute('tabindex');
          else if (previous) control.setAttribute('tabindex', previous);
          delete control.dataset.navTabindex;
          return;
        }

        if (!control.dataset.navTabindex) {
          control.dataset.navTabindex = control.hasAttribute('tabindex')
            ? control.getAttribute('tabindex')
            : 'none';
        }
        control.setAttribute('tabindex', '-1');
      });
    };
    const getFocusableNavItems = () => getNavControls().filter(control => control.tabIndex >= 0);

    const closeNav = () => {
      const restoreFocusToToggle = nav.contains(document.activeElement);
      nav.classList.remove('is-open');
      nav.setAttribute('aria-hidden', 'true');
      nav.setAttribute('inert', '');
      setNavControlsTabbable(false);
      toggle.setAttribute('aria-expanded', 'false');
      if (overlay) overlay.classList.remove('is-open');
      if (restoreFocusToToggle) toggle.focus();
    };
    const openNav = () => {
      nav.classList.add('is-open');
      nav.setAttribute('aria-hidden', 'false');
      nav.removeAttribute('inert');
      setNavControlsTabbable(true);
      toggle.setAttribute('aria-expanded', 'true');
      if (overlay) overlay.classList.add('is-open');
      const firstItem = getFocusableNavItems()[0];
      if (firstItem) firstItem.focus();
    };

    setNavControlsTabbable(nav.classList.contains('is-open'));

    toggle.addEventListener('click', () => {
      if (nav.classList.contains('is-open')) closeNav();
      else openNav();
    });
    if (overlay) overlay.addEventListener('click', closeNav);
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeNav();
      if (event.key !== 'Tab' || !nav.classList.contains('is-open')) return;

      const focusable = getFocusableNavItems();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  }

  // ---- Product accordion ----
  const accordion = document.querySelector('[data-product-accordion]');
  if (accordion) {
    const panes = Array.from(accordion.querySelectorAll('[data-product-pane]'));
    const desktopQuery = window.matchMedia('(min-width: 981px)');
    const defaultPane = panes.find(pane => pane.classList.contains('is-active')) || panes[0];

    const activatePane = (nextPane) => {
      panes.forEach((pane) => {
        const isActive = pane === nextPane;
        pane.classList.toggle('is-active', isActive);
        pane.setAttribute('aria-expanded', isActive ? 'true' : 'false');
      });
    };

    if (defaultPane) {
      activatePane(defaultPane);
    }

    panes.forEach((pane, index) => {
      pane.addEventListener('mouseenter', () => {
        if (desktopQuery.matches) activatePane(pane);
      });
      pane.addEventListener('focusin', () => activatePane(pane));
      pane.addEventListener('click', () => activatePane(pane));
      pane.addEventListener('keydown', (event) => {
        if (!['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'].includes(event.key)) return;
        event.preventDefault();
        const delta = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : -1;
        const nextIndex = (index + delta + panes.length) % panes.length;
        panes[nextIndex].focus();
        activatePane(panes[nextIndex]);
      });
    });

  }

  // ---- Product hero carousels ----
  // Note: on mobile (<=980px) the CSS stacks slides vertically and hides controls.
  // JS still runs but its transform is ignored thanks to `transform: none !important`.
  document.querySelectorAll('[data-product-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('[data-carousel-track]');
    const slides = Array.from(carousel.querySelectorAll('[data-slide]'));
    const dots = Array.from(carousel.querySelectorAll('[data-slide-to]'));
    const prev = carousel.querySelector('[data-carousel-prev]');
    const next = carousel.querySelector('[data-carousel-next]');
    if (!track || slides.length === 0) return;

    let index = 0;

    const render = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
      slides.forEach((slide, i) => slide.classList.toggle('is-active', i === index));
      dots.forEach((dot, i) => {
        dot.classList.toggle('is-active', i === index);
        dot.setAttribute('aria-selected', i === index ? 'true' : 'false');
      });
      if (prev) prev.disabled = index === 0;
      if (next) next.disabled = index === slides.length - 1;
    };

    const goTo = (i) => {
      index = Math.max(0, Math.min(slides.length - 1, i));
      render();
    };

    if (prev) prev.addEventListener('click', (e) => { e.stopPropagation(); goTo(index - 1); });
    if (next) next.addEventListener('click', (e) => { e.stopPropagation(); goTo(index + 1); });
    dots.forEach((dot, i) => {
      dot.addEventListener('click', (e) => { e.stopPropagation(); goTo(i); });
    });

    // Keep pane-level arrow-key navigation intact: only swallow arrows when focus
    // is inside the carousel controls, not on the pane itself.
    carousel.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      const target = event.target;
      if (!target.closest('[data-carousel-prev], [data-carousel-next], [data-slide-to]')) return;
      event.preventDefault();
      event.stopPropagation();
      goTo(index + (event.key === 'ArrowRight' ? 1 : -1));
    });

    render();
  });

  // ---- FAQ accordions ----
  document.querySelectorAll('.faq-item__q').forEach((btn, index) => {
    const item = btn.closest('.faq-item');
    const panel = item ? item.querySelector('.faq-item__a') : null;
    if (!item || !panel) return;

    const panelId = panel.id || `faq-panel-${index + 1}`;
    panel.id = panelId;
    btn.setAttribute('aria-controls', panelId);

    const setOpen = (nextItem, isOpen) => {
      const nextBtn = nextItem.querySelector('.faq-item__q');
      const nextPanel = nextItem.querySelector('.faq-item__a');
      nextItem.classList.toggle('is-open', isOpen);
      if (nextBtn) nextBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (nextPanel) {
        nextPanel.hidden = !isOpen;
        nextPanel.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      }
    };

    setOpen(item, item.classList.contains('is-open'));

    btn.addEventListener('click', () => {
      const wasOpen = item.classList.contains('is-open');
      // Close all in same group
      item.parentElement.querySelectorAll('.faq-item').forEach(el => setOpen(el, false));
      if (!wasOpen) setOpen(item, true);
    });
  });

  // ---- Deep-linked details panels ----
  const openHashDetails = () => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    let target;
    try {
      target = document.getElementById(decodeURIComponent(id));
    } catch (_) {
      target = document.getElementById(id);
    }
    const details = target ? target.closest('details') : null;
    if (details) details.open = true;
  };
  openHashDetails();
  window.addEventListener('hashchange', openHashDetails);

  // ---- Pitch video custom play overlay ----
  document.querySelectorAll('[data-pitch-video]').forEach((frame) => {
    const video = frame.querySelector('video');
    const playBtn = frame.querySelector('[data-pitch-play]');
    if (!video || !playBtn) return;

    const showControls = () => {
      frame.classList.add('is-playing');
      video.setAttribute('controls', '');
    };

    playBtn.addEventListener('click', () => {
      showControls();
      const started = video.play();
      if (started && typeof started.catch === 'function') {
        started.catch(() => {
          // Autoplay/playback blocked: keep native controls visible so the
          // user can start it manually.
          frame.classList.add('is-playing');
        });
      }
    });

    video.addEventListener('play', showControls);
    video.addEventListener('ended', () => {
      frame.classList.remove('is-playing');
      video.removeAttribute('controls');
      video.currentTime = 0;
    });
  });

  // ---- Scroll-triggered fade-in ----
  const fadeItems = Array.from(document.querySelectorAll('.fade-in'));
  if ('IntersectionObserver' in window && fadeItems.length) {
    document.documentElement.classList.add('supports-fade-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    fadeItems.forEach(el => observer.observe(el));
  } else {
    fadeItems.forEach(el => el.classList.add('is-visible'));
  }

  // ---- Active nav link ----
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  document.querySelectorAll('.site-nav a').forEach(a => {
    const href = a.getAttribute('href').replace(/\/+$/, '') || '/';
    if (href === path) a.classList.add('active');
  });
})();
