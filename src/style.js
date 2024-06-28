// Rolagem suave entre sections
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

// Dados dos certificados
const certificates = [
  {
    imageUrl: "imgs/Certificate Basics.png",
    altText: "Certificado 1",
    url: "https://www.shecodes.io/certificates/57626aeb2fa445fed52acb3c7d60b526?_gl=1*1wpvulc*_gcl_au*MjU2NjIzODI5LjE3MTEzNzc5MjQuMTUzMTE4NDU4MS4xNzE2NDMxMDQwLjE3MTY0MzEyODY.",
  },
  {
    imageUrl: "imgs/Certificate Add-on.png",
    altText: "Certificado 2",
    url: "https://www.shecodes.io/certificates/b6f22f32dd61e405a598431dfadae14e?_gl=1*1wpvulc*_gcl_au*MjU2NjIzODI5LjE3MTEzNzc5MjQuMTUzMTE4NDU4MS4xNzE2NDMxMDQwLjE3MTY0MzEyODY.",
  },
  {
    imageUrl: "imgs/Certificate Plus.png",
    altText: "Certificado 3",
    url: "https://www.shecodes.io/certificates/68d8c8ba5dc3e60f79b6089f2293d722?_gl=1*x5esdq*_gcl_au*MjU2NjIzODI5LjE3MTEzNzc5MjQuMTUzMTE4NDU4MS4xNzE2NDMxMDQwLjE3MTY0MzEyODY.",
  },
  {
    imageUrl: "imgs/Certificate Plus Add-on.png",
    altText: "Certificado 4",
    url: "https://www.shecodes.io/certificates/b96795c7273611609e63070dd0ba0d7d?_gl=1*1iizvm2*_gcl_au*MTE1Nzg3MTA2Ni4xNzE5MjMwNDU0",
  },
  {
    imageUrl: "imgs/Certificate Plus Add-on.png",
    altText: "Certificado 4",
    url: "https://www.shecodes.io/certificates/b96795c7273611609e63070dd0ba0d7d?_gl=1*1iizvm2*_gcl_au*MTE1Nzg3MTA2Ni4xNzE5MjMwNDU0",
  },
  {
    imageUrl: "imgs/Certificate Plus Add-on.png",
    altText: "Certificado 4",
    url: "https://www.shecodes.io/certificates/b96795c7273611609e63070dd0ba0d7d?_gl=1*1iizvm2*_gcl_au*MTE1Nzg3MTA2Ni4xNzE5MjMwNDU0",
  },
  {
    imageUrl: "imgs/Certificate Plus Add-on.png",
    altText: "Certificado 4",
    url: "https://www.shecodes.io/certificates/b96795c7273611609e63070dd0ba0d7d?_gl=1*1iizvm2*_gcl_au*MTE1Nzg3MTA2Ni4xNzE5MjMwNDU0",
  },
  {
    imageUrl: "imgs/Certificate Plus Add-on.png",
    altText: "Certificado 4",
    url: "https://www.shecodes.io/certificates/b96795c7273611609e63070dd0ba0d7d?_gl=1*1iizvm2*_gcl_au*MTE1Nzg3MTA2Ni4xNzE5MjMwNDU0",
  },
];

// Função para os elementos de certificado
function createCertificateElement(cert) {
  const certificateDiv = document.createElement("div");
  certificateDiv.classList.add("certificate");

  const certificateLink = document.createElement("a");
  certificateLink.href = cert.url;
  certificateLink.target = "_blank";

  const certificateImg = document.createElement("img");
  certificateImg.src = cert.imageUrl;
  certificateImg.alt = cert.altText;

  certificateLink.appendChild(certificateImg);
  certificateDiv.appendChild(certificateLink);

  return certificateDiv;
}

// Selecionar o container de certificados
const certificatesContainer = document.querySelector(".certificates-container");

// Criar elementos para cada certificado e adicioná-los ao container
certificates.forEach((cert) => {
  const certificateElement = createCertificateElement(cert);
  certificatesContainer.appendChild(certificateElement);
});

// Rolagem do botão Project-1

document.querySelector(".view-web").addEventListener("mouseover", function () {
  this.classList.add("hovered");
});

document.querySelector(".view-web").addEventListener("mouseout", function () {
  this.classList.remove("hovered");
});

// Rolagem do botão Project-2

document
  .querySelector(".view-web-2")
  .addEventListener("mouseover", function () {
    this.classList.add("hovered");
  });

document.querySelector(".view-web-2").addEventListener("mouseout", function () {
  this.classList.remove("hovered");
});
