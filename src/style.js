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
  {
    src: "imgs/icon-react.png",
    alt: "React",
    class: "react-icon media-icon",
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
    imageUrl: "imgs/Certificate Responsive.png",
    altText: "Certificado 6",
    url: "https://www.shecodes.io/certificates/67e0eddd194c9c3fddb3089f6077c1aa?_gl=1*1oyyri6*_gcl_au*MTE1Nzg3MTA2Ni4xNzE5MjMwNDU0",
  },
  {
    imageUrl: "imgs/Certificate Responsive Add-on.png",
    altText: "Certificado 7",
    url: "https://www.shecodes.io/certificates/4e4ce86eb863258b8eae61cfbc5ae76a?_gl=1*y7r36g*_gcl_au*MTE1Nzg3MTA2Ni4xNzE5MjMwNDU0LjIwNTU5NDU5NzMuMTcyMzQyOTg3Ni4xNzIzNDI5ODc1",
  },
  {
    imageUrl: "imgs/Certificate React.png",
    altText: "Certificado 8",
    url: "https://www.shecodes.io/certificates/32cca132cccc818562a13d3f3a316856?_gl=1*igg9ra*_gcl_au*MTU4MTI4ODkuMTcyOTI1MjAyNw..",
  },
  {
    imageUrl: "imgs/Certificate Advanced React.png",
    altText: "Certificado 9",
    url: "https://www.shecodes.io/certificates/5c10d79c325c7d7c1710406081f9a2ba?_gl=1*1fc7df0*_gcl_au*MTAyNzc0MjE0MC4xNzMyOTEzMjUx",
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
    title: "Dictionary App",
    imgSrc: "imgs/Dictionary-App.png",
    imgAlt: "dictionary-app",
    description:
      "A powerful dictionary app that provides detailed definitions and translations. It allows users to search for words and view their meanings, synonyms, and translations in real time.",
    techStack: "React, JavaScript, APIs, CSS",
    liveLink: "https://dictionary-app-search.netlify.app",
    githubLink: "https://github.com/juliabacchi1/dictionary-app",
    buttonClass: "view-web",
  },
  {
    title: "Weather Search Engine",
    imgSrc: "imgs/Weather-Search-Engine.png",
    imgAlt: "weather-search-engine",
    description:
      "A weather search engine that allows users to search for current weather information for any city worldwide. Built with React and integrated with weather APIs for real-time data.",
    techStack: "React, JavaScript, APIs, CSS",
    liveLink: "https://temp-search-engine.netlify.app",
    githubLink: "https://github.com/juliabacchi1/react-search-engine",
    buttonClass: "view-web",
  },
  {
    title: "Travel Showcase Project",
    imgSrc: "imgs/Travel-showcase.png",
    imgAlt: "travel-showcase",
    description:
      "An interactive website that highlights the amazing aspects of a destination. Designed with a responsive layout, it features seamless integration of external content.",
    techStack: "JavaScript, CSS, Bootstrap",
    liveLink: "https://fullyresponsive-destination.netlify.app",
    githubLink: "https://github.com/juliabacchi1/travel-destination",
    buttonClass: "view-web",
  },
  {
    title: "Responsive Portfolio Template",
    imgSrc: "imgs/Portfolio-template.png",
    imgAlt: "portfolio-template",
    description:
      "A customizable portfolio template designed for individuals to showcase their projects, skills, and experiences responsively.",
    techStack: "JavaScript, CSS, Bootstrap",
    liveLink: "https://fullyresponsive-portfolio.netlify.app",
    githubLink: "https://github.com/juliabacchi1/responsive-portfolio",
    buttonClass: "view-web",
  },
  {
    title: "Recipes Generator",
    imgSrc: "imgs/Recipes-generator.png",
    imgAlt: "recipes-generator",
    description:
      "Utilizes AI to generate personalized recipes based on user-inputted ingredients.",
    techStack: "JavaScript, CSS, API",
    liveLink: "https://recipes-generator-ai.netlify.app",
    githubLink: "https://github.com/juliabacchi1/recipes-generator",
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
      <p class="item-text d-none d-md-block">${project.description}</p>
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
