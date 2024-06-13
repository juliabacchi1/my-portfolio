// rolagem suave quando um desses links é clicado
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  });
});

// mostrar/esconder o botão
const backToTopButton = document.getElementById("back-to-top");

window.onscroll = function () {
  if (window.scrollY > 300) {
    backToTopButton.classList.remove("hide");
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
    backToTopButton.classList.add("hide");
  }
};

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// GSAP animation
document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript carregado!");
  gsap.to("#logo", {
    rotation: 360,
    duration: 2,
    repeat: -1,
    ease: "linear",
  });
});

//menu inicial

