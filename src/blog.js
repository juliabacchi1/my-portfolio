// Blog

const articles = [
  {
    title: "The importance and challenges of career change",
    content: `<h4>Why is it difficult to change?</h4>
<p class="text-justify mt-4">Changing careers is a significant decision that many people face. Whether due to job dissatisfaction or a desire for purpose, this transformation comes with challenges that require preparation and perseverance. 
<br /><br /> Accepting change is not easy, as it often pushes us out of our comfort zones. The unknown can create fear and insecurity. 
<br /><br /> To find happiness in pursuing our desires, self-awareness and psychological well-being are essential. Acceptance involves navigating past demands and doubts, but recognizing that we control our journey can lead to meaningful change.</p>`,
    content2: `<h4 class="m-0">And for me, it was no different:</h4>
<br /> <p class="text-justify">My journey began in the tourism and hospitality sector, where I gained valuable experiences. However, I felt a strong desire to explore new opportunities in technology. 
  Transitioning to front-end development was a thoughtful decision that required months of research and reflection. I discovered my passion for web development through online courses, finding fulfillment with each accomplishment.
 <br /><br /> This career change allows me to integrate my passion for sustainability, demonstrating that technology can coexist with nature. 
  While I faced challenges, especially as a woman in a male-dominated field, I found strength in overcoming obstacles and support from organizations like SheCodes, which empower women in tech.
<br /><br />  I continually question my path but remain committed to discovering where I truly belong in the tech world. Currently, I'm working on projects that expand my knowledge, and I'm excited about future possibilities. 
  My advice for others is to fearlessly pursue their dreams; with determination and dedication, any dream can become a reality.
</p>`,
    date: "2024-08-01",
    image: "imgs/butterfly.jpg",
  },
  // Adicione mais artigos aqui
];

function displayArticles() {
  const articlesSection = document.getElementById("articles");
  articlesSection.innerHTML = "";

  articles.forEach((article) => {
    const articleElement = document.createElement("div");
    articleElement.className = "article";

    articleElement.innerHTML = `
            <div class="row">
                <div class="col-12">
                    <h3>${article.title}</h3>
                    <p>${article.date}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-6 d-none d-md-block">
                    <img class="img-fluid rounded" src="${article.image}" alt="${article.title}">
                </div>
                <div class="col-12 col-md-6">
                    <p class="m-0">${article.content}</p>
                </div>
            <div class="col-12">
            <p class="mt-2">${article.content2}</p>
            </div>
            </div>
        `;

    articlesSection.appendChild(articleElement);
  });
}

document.addEventListener("DOMContentLoaded", displayArticles);
