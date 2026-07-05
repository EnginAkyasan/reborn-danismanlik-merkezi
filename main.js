/* ================================================
   REBORN DANIŞMANLIK MERKEZİ — Main JavaScript
   ================================================ */

/* ─── NAVİGASYON ─── */
(function initNav() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  // Scroll → sticky nav
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Hamburger toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);

      const spans = hamburger.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });

    // Close menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        const spans = hamburger.querySelectorAll('span');
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      });
    });
  }
})();

/* ─── SCROLL REVEAL ─── */
(function initReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(el => observer.observe(el));
})();

/* ─── COUNT UP ANİMASYONU ─── */
(function initCountUp() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  function animateCount(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const duration = 2000;
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      el.textContent = current.toLocaleString('tr-TR') + (target >= 100 ? '+' : '');
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
})();

/* ─── TOAST BİLDİRİM ─── */
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const icons = { success: '✓', error: '✗', info: 'ℹ' };
  toast.innerHTML = `<span style="font-weight:700">${icons[type] || '✓'}</span> ${message}`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideInRight 0.3s var(--ease) reverse';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* ─── FORM: ANA SAYFA ÖN BAŞVURU ─── */
(function initMiniForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const firstName = form.querySelector('#firstName')?.value.trim();
    const phone = form.querySelector('#phone')?.value.trim();
    const kvkk = form.querySelector('#kvkk')?.checked;

    if (!firstName || !phone) {
      showToast('Lütfen ad ve telefon bilgilerinizi girin.', 'error');
      return;
    }

    if (!kvkk) {
      showToast('KVKK onayı zorunludur.', 'error');
      return;
    }

    const btn = form.querySelector('[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span style="display:inline-block;animation:spin 1s linear infinite">⏳</span> Gönderiliyor...';
    btn.disabled = true;

    // Simüle API çağrısı
    await new Promise(r => setTimeout(r, 1500));

    btn.innerHTML = originalText;
    btn.disabled = false;
    form.reset();

    showToast('Başvurunuz alındı! 24 saat içinde sizi arayacağız. 🌿', 'success');
  });
})();

/* ─── FORM: DETAYLI İLETİŞİM FORMU ─── */
(function initFullForm() {
  const form = document.getElementById('fullContactForm');
  if (!form) return;

  // URL parametrelerinden alanları doldur
  const params = new URLSearchParams(window.location.search);
  const hizmet = params.get('hizmet');
  const psikolog = params.get('psikolog');

  if (hizmet) {
    const therapyMap = { bireysel: 'bireysel', cift: 'cift', aile: 'aile', cocuk: 'cocuk', online: 'online', emdr: 'emdr' };
    const radioVal = therapyMap[hizmet];
    if (radioVal) {
      const radio = form.querySelector(`input[name="therapyType"][value="${radioVal}"]`);
      if (radio) radio.checked = true;
    }
  }

  if (psikolog) {
    const psyMap = { gizem: 'gizem', ahmet: 'ahmet', selin: 'selin', mert: 'mert', elif: 'elif' };
    const psySelect = form.querySelector('#cpsy');
    if (psySelect && psyMap[psikolog]) psySelect.value = psyMap[psikolog];
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fname = form.querySelector('#fname')?.value.trim();
    const lname = form.querySelector('#lname')?.value.trim();
    const phone = form.querySelector('#cphone')?.value.trim();
    const kvkk  = form.querySelector('#ckvkk')?.checked;
    const therapy = form.querySelector('input[name="therapyType"]:checked');

    if (!fname || !lname) {
      showToast('Lütfen adınızı ve soyadınızı girin.', 'error');
      return;
    }

    if (!phone || phone.replace(/\D/g, '').length < 10) {
      showToast('Geçerli bir telefon numarası girin.', 'error');
      return;
    }

    if (!therapy) {
      showToast('Lütfen bir terapi türü seçin.', 'error');
      return;
    }

    if (!kvkk) {
      showToast('KVKK onayı zorunludur.', 'error');
      return;
    }

    const btn = form.querySelector('#submitBtn');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '⏳ Gönderiliyor...';
    btn.disabled = true;

    await new Promise(r => setTimeout(r, 2000));

    btn.innerHTML = originalHTML;
    btn.disabled = false;
    form.reset();

    showToast(`${fname} Hanım/Bey, başvurunuz alındı! En geç 24 saat içinde sizi arayacağız. 🌿`, 'success');

    setTimeout(() => {
      form.closest('section')?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  });
})();

/* ─── ACCORDION (SSS) ─── */
(function initAccordion() {
  const items = document.querySelectorAll('.accordion-item');

  items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Diğerlerini kapat
      items.forEach(i => i.classList.remove('open'));

      // Tıklananı aç/kapat
      if (!isOpen) item.classList.add('open');
    });
  });
})();

/* ─── HİZMET NAV HIGHLIGHTING ─── */
(function initServiceNav() {
  const links = document.querySelectorAll('.service-nav-link');
  if (!links.length) return;

  const sections = Array.from(links).map(link => {
    const id = link.getAttribute('href')?.replace('#', '');
    return id ? document.getElementById(id) : null;
  }).filter(Boolean);

  function updateActive() {
    let current = sections[0];
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 200) current = s;
    });

    links.forEach(link => {
      const isActive = link.getAttribute('href') === `#${current.id}`;
      link.style.color = isActive ? 'var(--sage)' : 'var(--muted)';
      link.style.borderBottomColor = isActive ? 'var(--sage)' : 'transparent';
    });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
})();

/* ─── SMOOTH SCROLL ─── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 80;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ─── SPIN ANİMASYON (CSS inject) ─── */
const style = document.createElement('style');
style.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
document.head.appendChild(style);

/* ─── TELEFON FORMATI ─── */
(function initPhoneFormat() {
  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  phoneInputs.forEach(input => {
    input.addEventListener('input', function () {
      let v = this.value.replace(/\D/g, '').slice(0, 11);
      if (v.startsWith('0') && v.length > 4) {
        v = v.slice(0, 4) + ' ' + v.slice(4, 7) + ' ' + v.slice(7, 9) + ' ' + v.slice(9, 11);
      }
      this.value = v.trim();
    });
  });
})();

/* ─── ACTIVE NAV LINK ─── */
(function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();
