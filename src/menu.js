export default function loadMenuPage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    // Array of menu item objects
    const menuItems = [
        { name: "Item Name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum purus ac lorem porttitor vulputate" },
        { name: "Item Name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum purus ac lorem porttitor vulputate" },
        { name: "Item Name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum purus ac lorem porttitor vulputate" },
        { name: "Item Name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum purus ac lorem porttitor vulputate" },
        { name: "Item Name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum purus ac lorem porttitor vulputate" },
        { name: "Item Name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum purus ac lorem porttitor vulputate" }
    ];
    
    // Create menu container
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    // Iterate over the menuItems array
    menuItems.forEach(item => {
        // Create menu item
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        // Create heading
        const heading = document.createElement("h3");
        heading.textContent = item.name;

        // Create description
        const description = document.createElement("p");
        description.classList.add("menu-item-description");
        description.textContent = item.description;

        // Append heading and description to menu item
        menuItem.appendChild(heading);
        menuItem.appendChild(description);

        // Append menu item to menu container
        menuContainer.appendChild(menuItem);
    });

    // Append menu container to content
    content.appendChild(menuContainer);
}