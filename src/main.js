import "./style.css";

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const hasScrolled = window.scrollY > 12;
  header?.classList.toggle("shadow-sm", hasScrolled);
});
