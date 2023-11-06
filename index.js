const travelAgency = {
    agencyName: "SUNNY Travel",
    services: ["Tours", "Flights", "Hotels", "Cruises"],
    establishedYear: 2005
};

// Select elements by ID
const h1Element = document.querySelector("h1");
const pElement = document.querySelector("p");
const buttonElement = document.querySelector(".btn");

// Set text content for the selected elements
h1Element.textContent = `Welcome to ${travelAgency.agencyName}`;
pElement.textContent = `Explore the world with our services: ${travelAgency.services.join(", ")}`;
buttonElement.textContent = "Get a Consultation";

// Add event listeners
buttonElement.addEventListener("click", function () {
    alert("You clicked the 'Get a Consultation' button!");
});

pElement.addEventListener("mouseover", function () {
    pElement.style.color = "blue";
});

document.addEventListener("keypress", function (event) {
    if (event.key === "c") {
        document.body.style.backgroundColor = "lightgray";
    }
});