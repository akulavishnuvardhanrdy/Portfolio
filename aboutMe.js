// About Description
const aboutDescription = `
  I'm Vishnu Vardhan, a Full Stack Developer passionate about building scalable and responsive web applications. 
  I work with both the MERN stack and Spring Boot, with a strong foundation in Java Core and DSA. I love solving 
  real-world problems through clean code and efficient solutions, and I’m always eager to learn and grow as a developer.
`;

// About Cards Data
const aboutCardsData = [
  {
    imgSrc: "./images/java_logo.png",
    title: "Language",
    description: "Expert in Java core concepts and proficient in solving DSA",
  },
  {
    imgSrc: "./images/full-stack-logo.png",
    title: "Full Stack Dev",
    description: "Skilled in Web Development with MERN and Spring Boot.",
  },
  {
    imgSrc: "./images/git.png",
    title: "Collaboration",
    description: "Using Git & GitHub for version control and team collaboration.",
  },
];

// Tools Data
const toolsData = [
  { imgSrc: "./images/vscode.png", alt: "VSCode Logo" },
  { imgSrc: "./images/postman.png", alt: "React Logo" },
  { imgSrc: "./images/intellij.png", alt: "JavaScript Logo" },
  { imgSrc: "./images/aws.png", alt: "Spring Boot Logo" },
  { imgSrc: "./images/github.png", alt: "MongoDB Logo" },
  { imgSrc: "./images/git.png", alt: "Git Logo" },
];

// Populate About Description
document.getElementById("about-description").innerHTML = aboutDescription;

// Populate About Cards
const aboutCardsContainer = document.getElementById("about-cards");
aboutCardsContainer.innerHTML = aboutCardsData
  .map(
    ({ imgSrc, title, description }) => `
      <li class="border-[0.5px] border-gray-400 rounded-xl p-6 
          cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 
          hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
        <img src="${imgSrc}" alt="${title}" class="w-14 mt-3">
        <h3 class="my-4 font-semibold text-gray-700 dark:text-white">${title}</h3>
        <p class="text-gray-600 text-sm dark:text-white/80">${description}</p>
      </li>
    `
  )
  .join("");

// Populate Tools
const toolsContainer = document.getElementById("tools-list");
toolsContainer.innerHTML = toolsData
  .map(
    ({ imgSrc, alt }) => `
      <li class="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
        <img src="${imgSrc}" alt="${alt}" class="w-5 sm:w-7">
      </li>
    `
  )
  .join("");
