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

// Dados das competências

const competences = [
  {
    src: "imgs/icon-html.png",
    alt: "HTML",
    class: "html-icon media-icon",
  },
  {
    src: "imgs/icon-css.png",
    alt: "CSS",
    class: "css-icon media-icon",
  },
  {
    src: "imgs/icon-js.png",
    alt: "JavaScript",
    class: "js-icon media-icon",
  },
  // Adicione mais competências conforme necessário
];

// Função para os elementos das competências
const competencesContainer = document.getElementById("competences-container");

competences.forEach((skill) => {
  const skillImg = document.createElement("img");
  skillImg.src = skill.src;
  skillImg.alt = skill.alt;
  skillImg.className = skill.class;

  competencesContainer.appendChild(skillImg);
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
    imageUrl: "imgs/Certificate AI Add-on.png",
    altText: "Certificado 5",
    url: "https://www.shecodes.io/certificates/901bc2c68769648786a04148d4d45145?_gl=1*nupcai*_gcl_au*MTE1Nzg3MTA2Ni4xNzE5MjMwNDU0",
  },
  {
    imageUrl: "imgs/Certificate Plus Add-on.png",
    altText: "Certificado 6",
    url: "https://www.shecodes.io/certificates/b96795c7273611609e63070dd0ba0d7d?_gl=1*1iizvm2*_gcl_au*MTE1Nzg3MTA2Ni4xNzE5MjMwNDU0",
  },
  {
    imageUrl: "imgs/Certificate Plus Add-on.png",
    altText: "Certificado 7",
    url: "https://www.shecodes.io/certificates/b96795c7273611609e63070dd0ba0d7d?_gl=1*1iizvm2*_gcl_au*MTE1Nzg3MTA2Ni4xNzE5MjMwNDU0",
  },
  {
    imageUrl: "imgs/Certificate Plus Add-on.png",
    altText: "Certificado 8",
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

// Dados dos projetos

const projects = [
  {
    title: "Recipes Generator",
    imgSrc: "imgs/Recipes-generator.png",
    imgAlt: "recipes-generator",
    description:
      "Utilizes AI to generate personalized recipes based on user-inputted ingredients.",
    techStack: "HTML, CSS, JavaScript, Artificial Intelligence",
    liveLink: "https://recipes-generator-ai.netlify.app",
    githubLink: "https://github.com/juliabacchi1/recipes-generator",
    buttonClass: "view-web",
  },
  {
    title: "Weather App",
    imgSrc: "imgs/Weather-app.png",
    imgAlt: "weather-app",
    description:
      "Allows users to check the current weather conditions in different locations in the world. The app provides real-time information on temperature, humidity, wind speed, and weather forecasts for the coming days.",
    techStack: "HTML, CSS, JavaScript, Weather API",
    liveLink: "https://the-weather-app-jb.netlify.app/",
    githubLink: "https://github.com/juliabacchi1/my-weather-app",
    buttonClass: "view-web",
  },
  {
    title: "World Clock",
    imgSrc: "imgs/World-clock.png",
    imgAlt: "world-clock",
    description:
      "Provides a straightforward way to track different time zones around the globe.",
    techStack: "HTML, CSS, JavaScript, Dates and Time Zones API",
    liveLink: "https://the-world-clock-jb.netlify.app",
    githubLink: "https://github.com/juliabacchi1/world-clock",
    buttonClass: "view-web",
  },
];

// Função para os elementos de projeto

const projectsContainer = document.getElementById("projects-container");

projects.forEach((project) => {
  const projectItem = document.createElement("div");
  projectItem.className = "project-items";

  projectItem.innerHTML = `
    <div class="item-image">
      <a href="${project.liveLink}" target="_blank">
        <img src="${project.imgSrc}" alt="${project.imgAlt}" class="item-1 responsive-image" />
      </a>
    </div>
    <div class="item-description">
      <h2 class="item-title">${project.title}</h2>
      <p class="item-text">${project.description}</p>
      <p class="item-type">${project.techStack}</p>
      <div class="item-button">
        <a href="${project.githubLink}" target="_blank">
          <button class="${project.buttonClass} button-23" role="button">
            <span class="item-demo">GitHub</span>
          </button>
        </a>
      </div>
    </div>
  `;

  projectsContainer.appendChild(projectItem);
});

// Rolagem dos botões
document.querySelectorAll(".view-web").forEach((button) => {
  button.addEventListener("mouseover", function () {
    this.classList.add("hovered");
  });
  button.addEventListener("mouseout", function () {
    this.classList.remove("hovered");
  });
});
