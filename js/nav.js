const toggle = document.getElementById("navToggle");
const nav = document.getElementById("mobileNav");
const backdrop = document.getElementById("navBackdrop");

if (toggle && nav && backdrop) {
  toggle.onclick = () => {
    nav.classList.toggle("open");
    backdrop.classList.toggle("show");
  };

  backdrop.onclick = () => {
    nav.classList.remove("open");
    backdrop.classList.remove("show");
  };
}
