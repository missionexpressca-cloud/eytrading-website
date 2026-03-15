document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");
  const yearEl = document.getElementById("year");

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navList.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const statusBox = document.getElementById("form-status");
  const subjectField = document.getElementById("subject-field");
  const emailField = document.getElementById("email");
  const hiddenSubject = document.getElementById("email-subject");
  const replytoField = document.getElementById("replyto-field");

  if (form && submitBtn && statusBox && subjectField && emailField && hiddenSubject && replytoField) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      statusBox.className = "form-status";
      statusBox.textContent = "";

      hiddenSubject.value = subjectField.value
        ? "Website inquiry: " + subjectField.value
        : "New message from eytrading.ca";

      replytoField.value = emailField.value || "";

      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      try {
        const formData = new FormData(form);

        const response = await fetch(form.action, {
          method: "POST",
          body: formData
        });

        const data = await response.json();

        if (response.ok && data.success) {
          statusBox.className = "form-status success show";
          statusBox.textContent = "Message sent successfully. Thank you for contacting us.";
          form.reset();
        } else {
          statusBox.className = "form-status error show";
          statusBox.textContent = data.message || "Something went wrong. Please try again.";
        }
      } catch (error) {
        statusBox.className = "form-status error show";
        statusBox.textContent = "Unable to send your message right now. Please try again later.";
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
      }
    });
  }
});
