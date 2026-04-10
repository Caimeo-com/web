// Caimeo - minimal client-side JS
(function () {
  'use strict';

  // ---- Mobile nav toggle ----
  const toggle = document.querySelector('.nav-toggle');
  // Target the top-level nav (direct child of body, outside header stacking context)
  const nav = document.querySelector('body > .site-nav');
  const overlay = document.querySelector('.nav-overlay');

  if (toggle) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('is-open');
      overlay.classList.toggle('is-open');
    });
    if (overlay) {
      overlay.addEventListener('click', () => {
        nav.classList.remove('is-open');
        overlay.classList.remove('is-open');
      });
    }
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
  document.querySelectorAll('.faq-item__q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('is-open');
      // Close all in same group
      item.parentElement.querySelectorAll('.faq-item').forEach(el => el.classList.remove('is-open'));
      if (!wasOpen) item.classList.add('is-open');
    });
  });

  // ---- Scroll-triggered fade-in ----
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
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // ---- Active nav link ----
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  document.querySelectorAll('.site-nav a').forEach(a => {
    const href = a.getAttribute('href').replace(/\/+$/, '') || '/';
    if (href === path) a.classList.add('active');
  });
})();
