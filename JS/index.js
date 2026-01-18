let scrollTimeout;
const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", () => {
  // Oculta mientras se hace scroll
  navbar.classList.add("hidden");

  // Reinicia el timeout
  clearTimeout(scrollTimeout);

  // Cuando se deja de scrollear, aparece
  scrollTimeout = setTimeout(() => {
    navbar.classList.remove("hidden");
  }, 200);
});



