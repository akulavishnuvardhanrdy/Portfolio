const services = [
    {
      title: "Hackathon Winner",
      description: "Secure 2nd place in intercollagiate hackathon win prize money ₹ 8000",
      bgImage: "./images/price.jpg",
    },
    {
      title: "PC Club Executive",
      description: "Effectively managed teams and delegated tasks.",
      bgImage: "./images/pcClub.jpg",
    },
    {
      title: "NSS Volunteer",
      description: "Organized events to promote social responsibility.",
      bgImage: "./images/nss.jpg",
    },
    {
      title: "Hackathon Organiser",
      description: "Enhanced skills in planning, coordination.",
      bgImage: "./images/hackathon.jpg",
    },
  ];
  
  const servicesContainer = document.getElementById("servicesContainer");
  
  services.forEach((service) => {
    const serviceHTML = `
        <div class="aspect-square bg-[url('${service.bgImage}')] bg-no-repeat bg-cover 
        bg-center rounded-lg relative cursor-pointer group">
          <div class="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 
          -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 class="font-semibold text-black">${service.title}</h2>
              <p class="text-sm text-gray-700">${service.description}</p>
            </div>
            <div class="border rounded-full border-black w-9 aspect-square flex items-center
            justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <img src="./images/send-icon.png" alt="" class="w-5">
            </div>
          </div>
        </div>
    `;
    servicesContainer.insertAdjacentHTML("beforeend", serviceHTML);
  });
  