// Data for skills
const skillsData = [
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    name: "HTML"
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    name: "JavaScript"
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    name: "ReactJS"
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    name: "Bootstrap"
  },
  {
    imgSrc: "https://static.cdnlogo.com/logos/t/58/tailwind-css.svg",
    name: "Tailwind"
  },
  {
    imgSrc: "https://img.icons8.com/?size=100&id=A3Ulk2RcONKs&format=png&color=000000",
    name: "Spring Boot"
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    name: "Node.js"
  },
  {
    imgSrc: "https://img.icons8.com/nolan/64/express-js.png",
    name: "Express.js"
  },
  {
    imgSrc: "./images/aws.png",
    name: "AWS"
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    name: "MySQL"
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    name: "MongoDB"
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    name: "Java"
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    name: "Git"
  },
  {
    imgSrc: "./images/github.png",
    name: "GitHub"
  }
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

function createSkill({ imgSrc, name }) {
return `
    <div class="flex flex-col flex-wrap justify-center items-center border border-gray-400 rounded-lg w-32 px-3 py-3 hover:shadow-black 
    cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500
    dark:hover:bg-darkHover dark:hover:shadow-white">
      <img src="${imgSrc}" alt="" class="w-14 rounded-xl">
      <h3 class="text-md my-1 text-gray-700 dark:text-white">${name}</h3>
    </div>
`;
}


const skillsContainer = document.getElementById("skills-container");
skillsContainer.innerHTML = skillsData.map(createSkill).join("");


const educationContainer = document.getElementById("education-container");
educationContainer.innerHTML = educationData.map(createCard).join("");
