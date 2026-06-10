// ===== NAVIGATION =====

function initNav() {
  const header = document.getElementById('header');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Hamburger
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }

  // Active link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === 'index.html' && href === 'index.html') ||
        (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ===== HEADER HTML =====

function renderHeader(currentPage) {
  const pages = [
    { href: 'index.html', label: 'Главная' },
    { href: 'about.html', label: 'О турах' },
    { href: 'camps.html', label: 'Кемпы' },
    { href: 'promotions.html', label: 'Акции' },
    { href: 'blog.html', label: 'Блог' },
    { href: 'schedule.html', label: 'Расписание' },
    { href: 'contacts.html', label: 'Контакты' }
  ];
  const links = pages.map(p =>
    `<a href="${p.href}" class="${p.href === currentPage ? 'active' : ''}">${p.label}</a>`
  ).join('');
  const mobileLinks = pages.map(p =>
    `<a href="${p.href}">${p.label}</a>`
  ).join('');

  return `
  <header class="header" id="header">
    <div class="container">
      <nav class="nav">
        <a href="index.html" class="nav-logo">
          <div class="nav-logo-icon">🐱</div>
          <div class="nav-logo-text">
            <span class="logo-name">Быстрая Кошка</span>
            <span class="logo-sub">Авторские туры</span>
          </div>
        </a>
        <div class="nav-links">${links}</div>
        <div class="nav-cta">
          <a href="contacts.html#register" class="btn btn-primary">Записаться</a>
        </div>
        <button class="hamburger" id="hamburger" aria-label="Меню">
          <span></span><span></span><span></span>
        </button>
      </nav>
    </div>
  </header>
  <div class="mobile-menu" id="mobileMenu">
    ${mobileLinks}
    <a href="contacts.html#register" class="btn btn-primary">Записаться в лагерь</a>
  </div>`;
}

// ===== FOOTER HTML =====

function renderFooter() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <div class="footer-logo-icon">🐱</div>
            <div>
              <div class="footer-brand-name">Быстрая Кошка</div>
              <div class="footer-brand-sub">Авторские туры</div>
            </div>
          </div>
          <p>Спортивно-развлекательные лагеря для взрослых. Приключения, тренировки, новые друзья и незабываемые впечатления.</p>
          <div class="footer-social">
            <a href="https://t.me/Svetlana_Melnikova1985" target="_blank" title="Telegram">✈️</a>
            <a href="https://wa.me/79912287826" target="_blank" title="WhatsApp">💬</a>
            <a href="tel:+79912287826" title="Позвонить">📞</a>
          </div>
        </div>
        <div class="footer-col">
          <h5>Разделы</h5>
          <ul>
            <li><a href="about.html">Об авторских турах</a></li>
            <li><a href="camps.html">Кемпы и программы</a></li>
            <li><a href="promotions.html">Акции и скидки</a></li>
            <li><a href="blog.html">Блог</a></li>
            <li><a href="schedule.html">Расписание</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Направления</h5>
          <ul>
            <li><a href="camps.html#russia">🌲 Россия (Теплеево)</a></li>
            <li><a href="camps.html#kyrgyzstan">🏔️ Иссык-Куль</a></li>
            <li><a href="camps.html#turkey">⛵ Турция (Крейсер)</a></li>
            <li><a href="camps.html#italy">🇮🇹 Италия (Комо)</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Контакты</h5>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.27 2 2 0 012.08.07h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            <a href="tel:+79912287826">+7 991 228-78-26</a>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
            <a href="https://t.me/Svetlana_Melnikova1985" target="_blank">@Svetlana_Melnikova1985</a>
          </div>
        </div>
      </div>
    </div>
    <div style="border-top: 1px solid rgba(255,255,255,.08)">
      <div class="container">
        <div class="footer-bottom">
          <p>© 2025 Клуб «Быстрая Кошка». Авторские туры.</p>
          <p>Спа-отель Теплеево Резорт, Московская область</p>
        </div>
      </div>
    </div>
  </footer>`;
}

// ===== SEASON LABELS =====
const SEASON_LABELS = { summer: "Лето", autumn: "Осень", winter: "Зима" };
const SEASON_COLORS = {
  summer: "linear-gradient(135deg, #1B4332, #2D6A4F)",
  autumn: "linear-gradient(135deg, #7C2D12, #C2410C)",
  winter: "linear-gradient(135deg, #1E3A5F, #2563EB)"
};

// ===== CAMP CARD =====
function renderCampCard(camp) {
  const bg = SEASON_COLORS[camp.season] || SEASON_COLORS.summer;
  const spotsClass = camp.spotsLeft <= 5 ? 'color-amber fw-700' : 'color-green';
  return `
  <div class="camp-card">
    <div class="camp-card-header" style="background: ${bg}">
      <div class="camp-season">${camp.icon} ${SEASON_LABELS[camp.season]}</div>
      <h3>${camp.name}</h3>
      <div class="camp-dates">📅 ${camp.dates}</div>
    </div>
    <div class="camp-card-body">
      <div class="camp-includes">
        <div class="camp-include-item">${checkIcon()} Питание шведский стол</div>
        <div class="camp-include-item">${checkIcon()} Проживание (2-х / 1-местное)</div>
        <div class="camp-include-item">${checkIcon()} Тренировки (бег, лыжи, ОФП)</div>
        <div class="camp-include-item">${checkIcon()} Бассейн и СПА</div>
        <div class="camp-include-item">${checkIcon()} Вечерние программы</div>
      </div>
      <div class="camp-card-footer">
        <span class="${spotsClass} fs-sm">Мест: ${camp.spotsLeft} из ${camp.spots}</span>
        <a href="contacts.html#register?camp=${encodeURIComponent(camp.name)}" class="btn btn-primary btn-sm">Записаться</a>
      </div>
    </div>
  </div>`;
}

function checkIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:18px;height:18px;color:var(--green-light);flex-shrink:0"><polyline points="20 6 9 17 4 12"/></svg>`;
}

// ===== ACCORDION =====
function initAccordions() {
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = btn.nextElementSibling;
      const isOpen = btn.classList.contains('open');
      // Close all
      document.querySelectorAll('.accordion-btn.open').forEach(b => {
        b.classList.remove('open');
        b.nextElementSibling.classList.remove('open');
      });
      if (!isOpen) {
        btn.classList.add('open');
        body.classList.add('open');
      }
    });
  });
}

// ===== TOAST =====
function showToast(msg, type) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.className = 'toast' + (type === 'error' ? ' error' : '');
  requestAnimationFrame(() => { t.classList.add('show'); });
  setTimeout(() => t.classList.remove('show'), 3500);
}

// ===== REGISTRATION FORM =====
function initRegForm() {
  const form = document.getElementById('regForm');
  if (!form) return;
  // Pre-fill camp from URL
  const params = new URLSearchParams(window.location.search);
  const campParam = params.get('camp');
  if (campParam) {
    const sel = form.querySelector('[name="camp"]');
    if (sel) {
      Array.from(sel.options).forEach(o => {
        if (o.value.toLowerCase().includes(campParam.toLowerCase().slice(0, 10))) {
          o.selected = true;
        }
      });
    }
  }
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    // Save to localStorage
    const regs = getAdminData('registrations', []);
    regs.push({ ...data, id: Date.now(), status: 'pending', date: new Date().toISOString().slice(0,10) });
    setAdminData('registrations', regs);
    showToast('✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    form.reset();
  });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const els = document.querySelectorAll('.camp-card, .feature-card, .card, .blog-card, .location-card, .team-card, .contact-card, .promo-card');
  if (!('IntersectionObserver' in window)) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  els.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    obs.observe(el);
  });
}

// ===== COUNTER ANIMATION =====
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.round(current) + (el.dataset.suffix || '');
    if (current >= target) clearInterval(timer);
  }, 16);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length || !('IntersectionObserver' in window)) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { animateCounter(e.target); obs.unobserve(e.target); }
    });
  }, { threshold: .5 });
  counters.forEach(c => obs.observe(c));
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initAccordions();
  initRegForm();
  initScrollAnimations();
  initCounters();
  if (typeof initAdminData === 'function') initAdminData();
});
