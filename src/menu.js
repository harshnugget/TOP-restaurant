export default function loadMenuPage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    const div = document.createElement("div");
    div.textContent = "menu";
    content.appendChild(div);
}