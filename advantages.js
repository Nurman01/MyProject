// JavaScript objects and their properties
const advantagesInfo = {
    activeLeisure: "Enjoy active leisure and exciting adventures.",
    holidaysHotCountries: "Discover exotic destinations for hot country vacations.",
    earlySelectedVouchers: "Get early access to exclusive travel vouchers.",
    guaranteedTours: "Explore guaranteed tours to your dream destinations.",
    specialOffers: "Find special offers and discounts for your trips.",
    favorableConditions: "Experience favorable travel conditions with us."
};

// Function to handle events
function handleEvent(eventType, advantageId) {
    const advantageElement = document.getElementById(advantageId);
    advantageElement.addEventListener(eventType, () => {
        const advantageInfo = advantagesInfo[advantageId];
        alert(advantageInfo);
    });
}

// Add event listeners for click, mouseover, and keypress
handleEvent("click", "activeLeisure");
handleEvent("click", "holidaysHotCountries");
handleEvent("click", "earlySelectedVouchers");
handleEvent("mouseover", "guaranteedTours");
handleEvent("mouseover", "specialOffers");
handleEvent("mouseover", "favorableConditions");
handleEvent("keypress", "favorableConditions");