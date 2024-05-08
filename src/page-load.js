import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadAboutPage from "./about.js";

export default function initialPageLoad() {
    // Initial load
    loadHomePage();

    // Add event listeners for navigation tabs
    const homeButton = document.querySelector("#home");
    const menuButton = document.querySelector("#menu");
    const aboutButton = document.querySelector("#about");

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

    aboutButton.addEventListener("click", () => {
        deactivateAllButtons();
        aboutButton.classList.add("active-tab");
        loadAboutPage();
    });
    
    // Function to remove 'active-tab' class from all buttons
    function deactivateAllButtons() {
        [homeButton, menuButton, aboutButton].forEach(button => {
        button.classList.remove("active-tab");
        });
    }
}