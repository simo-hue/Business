// Presentation plus one function: the early-access form.
// No analytics, no tracking. The form sends one email address to the endpoint below.

// Set this to your Formspree (or compatible) endpoint, e.g. 'https://formspree.io/f/abcdwxyz'.
// Until it is set, the form explains that sign-up is not connected yet.
const EARLY_ACCESS_ENDPOINT = '';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.context, .mission-band, .flip-card, .trust-row, .compare, .steps article, .story-step, .story-numbers, .human, .faq, .early').forEach(section => {
    section.classList.add('reveal');
    observer.observe(section);
  });
}

const form = document.getElementById('early-access-form');
if (form) {
  const input = form.querySelector('input[type="email"]');
  const status = document.getElementById('form-status');
  const button = form.querySelector('button');
  const say = (text, kind) => {
    status.className = 'form-status' + (kind ? ' ' + kind : '');
    status.innerHTML = '<i></i> ' + text;
  };
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const email = input.value.trim();
    if (!email || !input.checkValidity()) {
      say('Please enter a valid work email.', 'err');
      input.focus();
      return;
    }
    if (!EARLY_ACCESS_ENDPOINT) {
      say('Sign-up is not connected yet. Please check back soon.', 'err');
      return;
    }
    button.disabled = true;
    say('Sending…');
    try {
      const response = await fetch(EARLY_ACCESS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ email, source: 'regulift early access' })
      });
      if (!response.ok) throw new Error('Request failed');
      say('You are on the list. We will be in touch.', 'ok');
      form.reset();
    } catch (error) {
      say('Something went wrong. Please try again in a moment.', 'err');
    } finally {
      button.disabled = false;
    }
  });
}
