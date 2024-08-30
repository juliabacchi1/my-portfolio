// Blog

const articles = [
  {
    title:
      "The Guide That Was Missing: How I Created Simplifying Programming for Beginners",
    content: `<h4>Bridging the Gap</h4>
    <p class="text-justify mt-4">Learning to program has never been more accessible than it is today. With the amount of content available across educational platforms, lack of information is no longer a valid excuse.
    <br /><br />SheCodes, for example, was so fundamental in my journey, with so important courses that shaped my knowledge in the area. Likewise, there are other renowned institutions that provide high-quality materials to train great web developers.
    <br /><br />However, I identified a significant gap: the absence of content that is both direct and comprehensive, capable of introducing the world of web development in a clear and accessible way for those just starting out in programming. Many people wonder if this is really their next career and, before they commit to paid courses, they need a way to genuinely gauge their interest.</p>`,
    content2: `<h4 class="m-0">Simplifying Programming - Beginner</h4>
<br /> <p class="text-justify">Thinking about this need, I created Simplifying Programming: The material that was carefully designed to bring together, in a clear and efficient way, the fundamentals of the main programming languages. The goal is to be able to provide an initial reference for those just starting out, providing a solid and practical foundation to embark on their web development journey.
<br /><br />With Simplifying Programming, my commitment is to make knowledge accessible and help transform the way people perceive programming. I'm here to be part of this global change and to inspire and help people decide their next steps, so they feel safe and confident to moving forward.
<br /><br /><strong>Introduction to the Manual</strong>
<p class="text-justify mt-4">Welcome to your programming guide! This manual was created to help beginners take their first steps in the world of web development. Here, you'll find clear and practical explanations about HTML, CSS, and JavaScript, the three essential languages for anyone who wants to create functional and attractive websites and applications.</p>
<strong>The Importance of Starting with HTML, CSS, and JavaScript</strong>
<p class="text-justify mt-4">HTML, CSS, and JavaScript are the foundations of the web. HTML is responsible for structuring content, CSS handles the look and style, and JavaScript adds interactivity and dynamism. Understanding these three languages is essential for any front-end developer, and they are the perfect starting point for beginners.</p>
<strong>Purpose and Structure of the Material</strong>
<p class="text-justify mt-4">The goal of this manual is to guide you, step by step, through the essential concepts and practices of these languages. Each section of the manual is dedicated to one of these technologies, with practical examples to make learning easier. By the end, you'll have a solid foundation to continue exploring the programming world and creating your own projects.</p>
<strong>Complete Manual Available for Download</strong>
<p class="text-justify mt-4">To make your learning experience even more convenient, the complete manual is available in a website and PDF versions, in English and Portuguese. You can download it and study offline at your own pace.</p>
<p>Open the Manual here: <a href="https://simplifying-2qpqfs7.gamma.site/" target="_blank">Simplyfying Programming - Beginner</a>
<br /><br /><a href="imgs/descomplicando-manual.pdf" target="_blank">Download Manual in Portuguese (PDF)</a>
<br /><a href="imgs/simplifying-manual.pdf" target="_blank">Download Manual in English (PDF)</a>
</p>`,
    date: "August 30, 2024",
    image: "imgs/simplifying.png",
  },
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
    date: "July 28, 2024",
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
