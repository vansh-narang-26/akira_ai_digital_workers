document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menuOverlay = document.querySelector(".menu-overlay");
  const closeButton = document.querySelector(".close-btn");

  closeButton.addEventListener("click", () => {
    menuOverlay.classList.remove("active");
  });

  hamburger.addEventListener("click", () => {
    menuOverlay.classList.toggle("active");
  });
  window.addEventListener("scroll", () => {
    if (menuOverlay.classList.contains("active")) {
      menuOverlay.classList.remove("active");
    }
  });
});
