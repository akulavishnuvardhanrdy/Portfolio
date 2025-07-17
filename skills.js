// Data for skills
const skillsData = [
    {
      imgSrc: "./images/frontend-logo.png",
      title: "Front End",
      description: "HTML, CSS, JavaScript, React, Bootstrap, Tailwind CSS",
    },
    {
      imgSrc: "./images/springboot-logo.png",
      title: "Back End",
      description: "Node.js, Express.js <br> Spring Boot",
    },
    {
      imgSrc: "./images/database-logo.png",
      title: "Databases",
      description: "Relational: MySQL<br> NoSQL: MongoDB",
    },
    {
      imgSrc: "./images/postman-logo.png",
      title: "Development Tools",
      description: "Postman, AWS, VS Code, REST APIs, Git, Github",
    },
];

// Data for education
const educationData = [
{
    imgSrc: "./images/rgukt_logo.png",
    title: "B.Tech in Computer Science",
    description:
    "I am studying B.Tech in CSE at RGUKT RK Valley, expected to graduate in 2026.<br><br>CGPA: 9.2",
},
{
    imgSrc: "./images/rgukt_logo.png",
    title: "Pre-University Course (PUC)",
    description:
    "Completed my PUC at RGUKT RK Valley in 2022, focusing on the basics of programming.<br><br>CGPA: 9.81",
},
{
    imgSrc: "./images/school_logo.png",
    title: "10th Class",
    description:
    "Completed my 10th class at Keshava Reddy School in 2020, laying the foundation for my academic journey.<br><br>Marks: 595 / 600",
},
];

// Function to create a card
function createCard({ imgSrc, title, description }) {
return `
    <div class="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black 
    cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500
    dark:hover:bg-darkHover dark:hover:shadow-white">
    <img src="${imgSrc}" alt="" class="w-12 rounded-xl">
    <h3 class="text-lg my-4 text-gray-700 dark:text-white">${title}</h3>
    <p class="text-sm text-gray-600 leading-5 dark:text-white/80">${description}</p>
    </div>
`;
}


const skillsContainer = document.getElementById("skills-container");
skillsContainer.innerHTML = skillsData.map(createCard).join("");


const educationContainer = document.getElementById("education-container");
educationContainer.innerHTML = educationData.map(createCard).join("");
