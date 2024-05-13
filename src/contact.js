export default function loadContactPage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    // Contact information
    const contactInfo = {
        address: "123 Main Street, City, Country",
        phone: "+1 234 567 890",
        email: "info@example.com"
    };
    
    // Create contact container
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    
    // Create address element
    const addressElement = document.createElement("p");
    addressElement.textContent = `Address: ${contactInfo.address}`;
    
    // Create phone element
    const phoneElement = document.createElement("p");
    phoneElement.textContent = `Phone: ${contactInfo.phone}`;
    
    // Create email element
    const emailElement = document.createElement("p");
    emailElement.textContent = `Email: ${contactInfo.email}`;
    
    // Append address, phone, and email elements to contact container
    contactContainer.appendChild(addressElement);
    contactContainer.appendChild(phoneElement);
    contactContainer.appendChild(emailElement);
    
    // Append contact container to content
    content.appendChild(contactContainer);
}