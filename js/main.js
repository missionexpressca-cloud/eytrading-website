document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');
  const navLinks = document.querySelectorAll('.site-nav .nav-link');
  const yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      const isOpen = siteNav.classList.toggle('open');
      navToggle.classList.toggle('is-active', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('nav-open', isOpen);
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        siteNav.classList.remove('open');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      });
    });

    document.addEventListener('click', function (e) {
      if (!siteNav.contains(e.target) && !navToggle.contains(e.target)) {
        siteNav.classList.remove('open');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 760) {
        siteNav.classList.remove('open');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      }
    });
  }

  const contactForm = document.getElementById('contactForm');
  const emailInput = document.getElementById('email');
  const subjectField = document.getElementById('subject-field');
  const replytoField = document.getElementById('replyto-field');
  const emailSubject = document.getElementById('email-subject');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      if (replytoField && emailInput) {
        replytoField.value = emailInput.value.trim();
      }

      if (emailSubject && subjectField && subjectField.value.trim()) {
        emailSubject.value = 'New message from everyonder.ca: ' + subjectField.value.trim();
      }

      const formData = new FormData(contactForm);

      try {
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Sending...';
        }

        if (formStatus) {
          formStatus.classList.add('show');
          formStatus.textContent = 'Sending your message...';
        }

        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json'
          }
        });

        const result = await response.json();

        if (response.ok) {
          if (formStatus) {
            formStatus.textContent = 'Message sent successfully.';
          }
          contactForm.reset();
        } else {
          if (formStatus) {
            formStatus.textContent = result.message || 'Failed to send message.';
          }
        }
      } catch (error) {
        if (formStatus) {
          formStatus.classList.add('show');
          formStatus.textContent = 'Network error. Please try again.';
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
        }
      }
    });
  }
});
