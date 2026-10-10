const projects = {
  keychain: {
    title: "Mechanical Keychain",
    description: "Mechanical keychain designed in Solidworks and fabricated with shop machinery",
    image: "https://cdn.prod.website-files.com/6668ccb3d1c8539b96774cd9/666b75d1ca4e20be07c66b46_keychain%20portfolio.png",
  },
  batteryModules: {
    title: "Battery Modules + Packs",
    description: "Battery module design and pack integration for Stellantis Ram ProMaster EV",
    image: "https://cdn.prod.website-files.com/6668ccb3d1c8539b96774cd9/6912e0fa14c7a99168bf1757_Battery%20Module.png",
  },
  miniatureCannon: {
    title: "Miniature Cannon",
    description: "Cannon designed on Solidworks and fabricated using shop machinery",
    image: "https://cdn.prod.website-files.com/6668ccb3d1c8539b96774cd9/6912e4563875c44f08bd1811_Cannon.png",
  },
  miata: {
    title: "1990 Mazda MX-5 Rebuild",
    description: "Giving a little car the potential to do big car things",
    image: "https://cdn.prod.website-files.com/6668ccb3d1c8539b96774cd9/6912dfe600cc125b6276a3b9_Miata.png",
  },
  prototyping: {
    title: "Rapid Design and Prototyping Venture",
    description: "Lots of 3D printed projects that can be found in the full portfolio",
    image: "https://cdn.prod.website-files.com/6668ccb3d1c8539b96774cd9/666b70bcc280281be95830cb_3D%20Printer.jpg",
  },
  cookieDesigner: {
    title: "Automated Cookie Designer",
    description: "Fully automated 3-axis frosting extrusion system for designing cookies",
    image: "https://cdn.prod.website-files.com/6668ccb3d1c8539b96774cd9/666b73b12a0fe8e6813ddf00_Cookie%20Portfolio.png",
  },
  carDrone: {
    title: "FPV RC Vehicle Car-Drone",
    description: "A remote controlled vehicle capable of travelling on both land and air",
    image: "https://cdn.prod.website-files.com/6668ccb3d1c8539b96774cd9/666b745944a0d45ada1334c8_Drone%20Portfolio.png",
  },
  rcCar: {
    title: "ESP32 Scrap Electronics RC Car",
    description: "Scrap electronics assembled into something that drives",
    image: "https://cdn.prod.website-files.com/6668ccb3d1c8539b96774cd9/6912e3591f05d122ea4c2175_RC%20Car.png",
  },
  gravityCar: {
    title: "AWD Gravity Car",
    description: "AWD gravity car designed to leverage mechanical advantage to transform tension into torque",
    image: "https://cdn.prod.website-files.com/6668ccb3d1c8539b96774cd9/666b758030b2120552e4d250_Gravity%20Car%20Portfolio.png",
  },
  dynamometer: {
    title: "Rope Brake Dynamometer",
    description: "Rope brake dynamometer built to evaluate the torque of a TT motor at various rotation rates",
    image: "https://cdn.prod.website-files.com/6668ccb3d1c8539b96774cd9/666b75368463d20cde4f873a_Dynamometer%20Portfolio.png",
  },
};

const projectId = new URLSearchParams(window.location.search).get("id");
const project = projects[projectId];
const content = document.getElementById("project-content");
const notFound = document.getElementById("project-not-found");

if (project) {
  document.title = `${project.title} | Cyrus Yu`;
  document.getElementById("project-title").textContent = project.title;
  document.getElementById("project-description").textContent = project.description;
  const image = document.getElementById("project-image");
  image.src = project.image;
  image.alt = project.title;
} else {
  content.hidden = true;
  notFound.hidden = false;
  document.title = "Project not found | Cyrus Yu";
}
