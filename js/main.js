/* ============================================================
   MAIN.JS — Space Robotics Portfolio
   ============================================================ */

// ---- Starfield Canvas ----
(function initStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, stars = [], animId;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function buildStars(n = 220) {
    stars = Array.from({ length: n }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.2 + 0.2,
      a: Math.random(),
      speed: Math.random() * 0.003 + 0.001,
      twinkle: Math.random() * Math.PI * 2,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    stars.forEach(s => {
      s.twinkle += s.speed;
      const alpha = s.a * (0.5 + 0.5 * Math.sin(s.twinkle));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 225, 255, ${alpha})`;
      ctx.fill();
    });
    animId = requestAnimationFrame(draw);
  }

  resize();
  buildStars();
  draw();
  window.addEventListener('resize', () => { resize(); buildStars(); });
})();


// ---- Header scroll behavior ----
(function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  let lastY = 0;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;

    if (y > 60) header.classList.add('scrolled');
    else header.classList.remove('scrolled');

    if (y > lastY && y > 120) header.classList.add('hidden');
    else header.classList.remove('hidden');

    lastY = y;
  }, { passive: true });
})();


// ---- Mobile nav ----
(function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (!hamburger || !mobileNav) return;

  let open = false;

  function toggle() {
    open = !open;
    mobileNav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    const spans = hamburger.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  }

  hamburger.addEventListener('click', toggle);
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', toggle));
})();


// ---- Scroll reveal ----
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
    io.observe(el);
  });
})();


// ---- Active nav link on scroll ----
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.header-nav a[href^="#"], .header-nav a[href*="index.html#"]');
  if (!sections.length || !navLinks.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        navLinks.forEach(a => {
          const href = a.getAttribute('href');
          const active = href === `#${id}` || href.endsWith(`#${id}`);
          a.style.color = active ? 'var(--accent)' : '';
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => io.observe(s));
})();


// ---- Smooth scroll for anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
