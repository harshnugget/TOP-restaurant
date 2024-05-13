import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadContactPage from "./contact.js";

export default function initialPageLoad() {
    // Initial load
    loadHomePage();

    // Add event listeners for navigation tabs
    const homeButton = document.querySelector("#home");
    const menuButton = document.querySelector("#menu");
    const contactButton = document.querySelector("#contact");

    // Initialize home tab as active
    homeButton.classList.add("active-tab");

    homeButton.addEventListener("click", () => {
        deactivateAllButtons();
        homeButton.classList.add("active-tab");
        loadHomePage();
    });

    menuButton.addEventListener("click", () => {
        deactivateAllButtons();
        menuButton.classList.add("active-tab");
        loadMenuPage();
    });

    contactButton.addEventListener("click", () => {
        deactivateAllButtons();
        contactButton.classList.add("active-tab");
        loadContactPage();
    });
    
    // Function to remove 'active-tab' class from all buttons
    function deactivateAllButtons() {
        [homeButton, menuButton, contactButton].forEach(button => {
        button.classList.remove("active-tab");
        });
    }
}