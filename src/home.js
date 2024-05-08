import Img from "./chef_hat.svg";

export default function loadHomePage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const img = document.createElement("img");
    img.src = Img;
    img.alt = "Chef Hat and Knives SVG Image";
    img.height = "300";
    img.width = "300";

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to my restaurant!";

    const description= document.createElement("p");
    description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    content.appendChild(img);
    content.appendChild(heading);
    content.appendChild(description);
}