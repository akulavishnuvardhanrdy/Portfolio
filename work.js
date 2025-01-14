const projects = [
    {
      id: "pacerDiv",
      title: "PACER",
      description: "Judiciary System",
      bgImage: "./images/pacer-logo.png",
    },
    {
      id: "vsrDiv",
      title: "VSR Booking",
      description: "Booking System",
      bgImage: "./images/vsr-logo.jpg",
    },
    {
      id: "hotelTaj",
      title: "Taj Hotel",
      description: "Room Bookings",
      bgImage: "./images/taj-logo.jpg",
    },
    {
      id: "electionsResults",
      title: "Elections",
      description: "Results display",
      bgImage: "./images/elections-logo.webp",
    },
  ];
  
  const projectsContainer = document.getElementById("projectsContainer");
  
  projects.forEach((project) => {
    const projectHTML = `
      <a href="#specific-project">
        <div id="${project.id}" class="aspect-square bg-[url('${project.bgImage}')] bg-no-repeat bg-cover 
        bg-center rounded-lg relative cursor-pointer group">
          <div class="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 
          -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 class="font-semibold">${project.title}</h2>
              <p class="text-sm text-gray-700">${project.description}</p>
            </div>
            <div class="border rounded-full border-black w-9 aspect-square flex items-center
            justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <img src="./images/send-icon.png" alt="" class="w-5">
            </div>
          </div>
        </div>
      </a>
    `;
    projectsContainer.insertAdjacentHTML("beforeend", projectHTML);
  });
  