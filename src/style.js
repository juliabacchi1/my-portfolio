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

//rolagem do segundo botão

document.querySelector(".view-web").addEventListener("mouseover", function () {
  this.classList.add("hovered");
});

document.querySelector(".view-web").addEventListener("mouseout", function () {
  this.classList.remove("hovered");
});
