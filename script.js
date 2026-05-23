// ============================================
// Maanik Logistics — Interactions
// ============================================

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  // Highlight active nav link by URL
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach((a) => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('visible'));
  }

  // Tracking form (demo)
  const trackForms = document.querySelectorAll('.track-form, #tracking-form');
  trackForms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      const id = (input?.value || '').trim() || 'MNK-2026-009284';
      showTrackingResult(id);
    });
  });

  // Contact form
  const contact = document.getElementById('contact-form');
  if (contact) {
    contact.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.getElementById('contact-status');
      if (status) {
        status.textContent =
          "Thanks! Your enquiry has been received. We'll get back to you within one business day.";
        status.style.color = 'var(--success)';
      }
      contact.reset();
    });
  }

  // Year in footer
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});

function showTrackingResult(id) {
  const target = document.getElementById('track-result');
  if (!target) {
    // Redirect to tracking page if hero form is used
    if (!window.location.pathname.includes('tracking.html')) {
      window.location.href = 'tracking.html?id=' + encodeURIComponent(id);
      return;
    }
  }
  if (!target) return;
  target.style.display = 'block';
  target.innerHTML = `
    <h4>Shipment ${id}</h4>
    <div class="track-meta">
      <div class="item"><div class="label">Origin</div><div class="value">Delhi, India</div></div>
      <div class="item"><div class="label">Destination</div><div class="value">London, UK</div></div>
      <div class="item"><div class="label">Status</div><div class="value" style="color:var(--orange-500)">In Transit</div></div>
    </div>
    <div class="track-timeline">
      <div class="timeline-item done">
        <div class="timeline-dot"></div>
        <div>
          <h5>Picked up</h5>
          <p>Shipment received from sender · Delhi hub</p>
        </div>
        <div class="timeline-time">Day 1 · 10:14</div>
      </div>
      <div class="timeline-item done">
        <div class="timeline-dot"></div>
        <div>
          <h5>Processed at origin</h5>
          <p>Customs cleared and loaded for departure</p>
        </div>
        <div class="timeline-time">Day 1 · 18:42</div>
      </div>
      <div class="timeline-item current">
        <div class="timeline-dot"></div>
        <div>
          <h5>In transit</h5>
          <p>On flight to destination — Heathrow (LHR)</p>
        </div>
        <div class="timeline-time">Day 2 · 04:10</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div>
          <h5>Out for delivery</h5>
          <p>Estimated arrival</p>
        </div>
        <div class="timeline-time">Day 3</div>
      </div>
    </div>
  `;
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Run tracking if landed via URL param
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (id && document.getElementById('track-result')) {
    const input = document.querySelector('#tracking-form input');
    if (input) input.value = id;
    showTrackingResult(id);
  }
});
