import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadAboutPage from "./about.js";

export default function initialPageLoad() {
    // Initial load
    loadHomePage();

    // Event listeners for tabs
    const homeButton = document.querySelector("#home");
    const menuButton = document.querySelector("#menu");
    const aboutButton = document.querySelector("#about");

    homeButton.addEventListener("click", () => {
        loadHomePage();
        console.log("Load Home page");
    });

    menuButton.addEventListener("click", () => {
        loadMenuPage();
        console.log("Load Menu page");
    });

    aboutButton.addEventListener("click", () => {
        loadAboutPage();
        console.log("Load About page");
    });
}