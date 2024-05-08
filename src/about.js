export default function loadAboutPage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    const div = document.createElement("div");
    div.textContent = "about";
    content.appendChild(div);
}