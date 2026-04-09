// Caimeo — minimal client-side JS
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
