const navLinks = document.querySelectorAll(".nav-links a");
const path = window.location.pathname.split("/").pop() || "index.html";

navLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (!href) return;
  const target = href.split("/").pop();
  if (target === path) {
    link.classList.add("active");
  }
});
