/* ============================================================
   JAGADEESH CHINTALAPUDI — Civil Engineering Portfolio
   main.js | All Client-Side Interactions
   Author: Civil Techy | Version: 1.0
   ============================================================ */

/* ── 1. THEME TOGGLE ── */
(function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
})();

function toggleTheme() {
  const root = document.documentElement;
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  const btn = document.querySelector('.theme-btn');
  if (btn) btn.querySelector('i').className = next === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

/* ── 2. NAVIGATION ── */
document.addEventListener('DOMContentLoaded', function () {

  /* Sticky nav shadow */
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  /* Hamburger menu */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });
  }

  /* Active nav link on scroll */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
  function highlightNav() {
    const scrollY = window.pageYOffset;
    sections.forEach(sec => {
      const top  = sec.offsetTop - 90;
      const h    = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + h) {
        navLinks.forEach(l => l.classList.remove('active'));
        document.querySelectorAll(`a[href="#${sec.id}"]`).forEach(l => l.classList.add('active'));
      }
    });
  }
  window.addEventListener('scroll', highlightNav);

  /* Back to top */
  const btt = document.getElementById('back-to-top');
  if (btt) {
    window.addEventListener('scroll', () => btt.classList.toggle('visible', window.scrollY > 400));
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ── 3. VANILLA AOS (scroll-triggered animations) ── */
  const aosEls = document.querySelectorAll('[data-aos]');
  const aosObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = e.target.dataset.aosDelay || 0;
        setTimeout(() => e.target.classList.add('aos-visible'), +delay);
      }
    });
  }, { threshold: 0.12 });
  aosEls.forEach(el => aosObserver.observe(el));

  /* ── 4. SKILL BARS ── */
  const skillFills = document.querySelectorAll('.skill-fill');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const pct = e.target.dataset.pct;
        e.target.style.width = pct + '%';
        skillObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  skillFills.forEach(el => skillObserver.observe(el));

  /* ── 5. ANIMATED COUNTERS ── */
  function animateCounter(el, target, duration) {
    let start = 0;
    const step = target / (duration / 16);
    function update() {
      start = Math.min(start + step, target);
      el.textContent = Number.isInteger(target) ? Math.round(start) : start.toFixed(1);
      if (start < target) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }
  const counterEls = document.querySelectorAll('.counter-num');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const target = parseFloat(e.target.dataset.target);
        animateCounter(e.target, target, 1800);
        counterObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  counterEls.forEach(el => counterObserver.observe(el));

  /* ── 6. TIMELINE ANIMATION ── */
  const timelineItems = document.querySelectorAll('.timeline-item');
  const tlObserver = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 120);
      }
    });
  }, { threshold: 0.15 });
  timelineItems.forEach(el => tlObserver.observe(el));

  /* ── 7. PROJECT FILTERING ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        const cat = card.dataset.category;
        const show = filter === 'all' || cat === filter;
        card.classList.toggle('hidden', !show);
      });
    });
  });

  /* Project card reveal on scroll */
  const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.1 });
  projectCards.forEach(el => projectObserver.observe(el));

  /* ── 8. CONTACT FORM VALIDATION ── */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;

      /* Validate each field */
      const fields = [
        { id: 'cf-name',    msg: 'Please enter your full name.', check: v => v.trim().length > 1 },
        { id: 'cf-email',   msg: 'Please enter a valid email address.', check: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
        { id: 'cf-subject', msg: 'Please enter a subject.', check: v => v.trim().length > 2 },
        { id: 'cf-message', msg: 'Message must be at least 20 characters.', check: v => v.trim().length >= 20 },
      ];

      fields.forEach(f => {
        const input = document.getElementById(f.id);
        const errEl = input.nextElementSibling;
        if (!f.check(input.value)) {
          input.style.borderColor = '#ef4444';
          if (errEl && errEl.classList.contains('form-error')) {
            errEl.textContent = f.msg;
            errEl.style.display = 'block';
          }
          valid = false;
        } else {
          input.style.borderColor = '';
          if (errEl && errEl.classList.contains('form-error')) errEl.style.display = 'none';
        }
      });

      if (valid) {
        const success = document.getElementById('form-success');
        if (success) { success.style.display = 'block'; }
        form.reset();
        setTimeout(() => { if (success) success.style.display = 'none'; }, 5000);
      }
    });

    /* Live clear error on input */
    form.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('input', () => {
        input.style.borderColor = '';
        const err = input.nextElementSibling;
        if (err && err.classList.contains('form-error')) err.style.display = 'none';
      });
    });
  }

  /* ── 9. FAQ ACCORDION ── */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');
      /* Close all */
      document.querySelectorAll('.faq-item').forEach(fi => {
        fi.classList.remove('open');
        fi.querySelector('.faq-answer').style.maxHeight = '0';
      });
      /* Open clicked if was closed */
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* ── 10. GALLERY LIGHTBOX ── */
  const lightbox  = document.getElementById('lightbox');
  const lbImg     = document.getElementById('lb-img');
  const lbClose   = document.querySelector('.lightbox-close');

  document.querySelectorAll('.gallery-item[data-src]').forEach(item => {
    item.addEventListener('click', () => {
      if (lbImg) lbImg.src = item.dataset.src;
      if (lightbox) lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
  function closeLightbox() {
    if (lightbox) lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lightbox) lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  /* ── 11. SMOOTH CLOSE MOBILE NAV ON LINK CLICK ── */
  document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNav) mobileNav.classList.remove('open');
    });
  });

  /* ── 12. THEME BUTTON ICON INIT ── */
  const themeBtn = document.querySelector('.theme-btn i');
  if (themeBtn) {
    const current = document.documentElement.getAttribute('data-theme');
    themeBtn.className = current === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }

});
