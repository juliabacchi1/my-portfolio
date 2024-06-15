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

//alternar a visibilidade do hover card

document.addEventListener("DOMContentLoaded", function () {
  const titleCard = document.getElementById("title-card");
  const card = document.querySelector(".cards");

  titleCard.addEventListener("click", function (event) {
    event.stopPropagation(); // Evita que o clique propague para o elemento pai
    card.classList.toggle("show-back");
  });

  // Captura o clique na área do card para ocultar o card-back
  card.addEventListener("click", function (event) {
    if (!event.target.closest(".card-back")) {
      card.classList.remove("show-back");
    }
  });
});
