const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector('nav');
const navLink = document.querySelector('nav ul');

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll',()=>{
    if(scrollY>50){
        navBar.classList.add('bg-white','bg-opacity-50','backdrop-blur-lg','shasow-sm'
            ,'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLink.classList.remove('bg-white','shadow-sm','bg-opacity-50'
            ,'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
    }else{
        navBar.classList.remove('bg-white','bg-opacity-50','backdrop-blur-lg','shasow-sm'
            ,'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLink.classList.add('bg-white','shadow-sm','bg-opacity-50'
            ,'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
    }
})

if (localStorage.theme === 'dark' || (!('theme' in localStorage))) {
    window.document.documentElement.classList.add('dark');
    localStorage.theme = 'dark'; 
} else {
    window.document.documentElement.classList.remove('dark');
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
}


const project = document.getElementById('specific-project');
const pacerDiv = document.getElementById('pacerDiv');
// PACER project content object
const pacerProjectIntro = {
    subHeading: "JIS",
    title: "PACER",
    description: "PACER is a Judiciary Information System that improves case management and accessibility for lawyers, judges, and registrars.",
    technologies: [
      "./images/js-logo.png",
      "./images/react-logo.png",
      "./images/spring.png",
      "./images/tailwind.png",
      "./images/git.png"
    ],
    keyFeatures: [
        "Manage court case details and status updates.",
        "Lawyers access past cases after payment.",
        "Role-based dashboards for judges, lawyers, and registrars.",
        "Account management with user registration and photo uploads.",
        "Real-time updates on case progress and hearing dates.",
        "Search functionality for lawyers to find relevant cases.",
        "Case adjournment and hearing schedule management.",
        "Secure document upload and storage for case files."
    ],    
    gitLink: "https://github.com/your-repo-link",
    demoLink: "https://your-live-demo-link.com",
    imageSrc: "./images/pacer-logo.png"
  };
  
  
  // Event listener to open the modal with the PACER project content
  pacerDiv.addEventListener("click", () => {
    
    project.classList.remove("hidden");
    // Add dynamic content from pacerProjectIntro object
    document.getElementById("projectImage").src = pacerProjectIntro.imageSrc;
    document.getElementById("subHeading").innerHTML = pacerProjectIntro.subHeading;
    document.getElementById("projectTitle").innerText = pacerProjectIntro.title;
    document.getElementById("projectDescription").innerText = pacerProjectIntro.description;
  
    technologies.innerHTML = pacerProjectIntro.technologies.map(tech => {
        return `<li class="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 ">
                    <img src=${tech} alt="${tech}" class="w-9 sm:w-7">
                </li>`;
    }).join('');

    const featuresList = document.getElementById("featuresList");
    featuresList.innerHTML = pacerProjectIntro.keyFeatures.map(feature => "-> "+`${feature}`).join("<br>");
  
    // Update the links
    document.getElementById("gitLink").href = pacerProjectIntro.gitLink;
    document.getElementById("demoLink").href = pacerProjectIntro.demoLink;
  });