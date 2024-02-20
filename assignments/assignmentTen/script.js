// script.js

// Part 1 - Advertisement Banner
const bannerTextElement = document.getElementById("bannerText");
const advertisements = [
    "Advertisement 1",
    "Advertisement 2",
    "Advertisement 3",
    "Advertisement 4",
    "Advertisement 5"
];

let currentIndex = 0;

function displayAdvertisement() {
    bannerTextElement.textContent = advertisements[currentIndex];
    currentIndex = (currentIndex + 1) % advertisements.length;
}

// Display the first advertisement when the page loads
displayAdvertisement();

// Rotate advertisements every 2 seconds
setInterval(displayAdvertisement, 2000);

// Part 2 - Images and Attributions
const images = {
    "garden.jpg": "Photo by John Doe <a href='https://example.com'>Link</a>",
    "golden.jpg": "Photo by Jane Smith <a href='https://example.com'>Link</a>",
    "mountain-lake.jpg": "Photo by Alice Johnson <a href='https://example.com'>Link</a>",
    "small-house.jpg": "Photo by Bob Brown <a href='https://example.com'>Link</a>",
    "snow.jpg": "Photo by Emily Williams <a href='https://example.com'>Link</a>"
};

const imagesContainer = document.getElementById("images");

// Loop through the images object and create img elements with attributions
for (const [imageName, attribution] of Object.entries(images)) {
    const imageElement = document.createElement("img");
    imageElement.src = "images/" + imageName;
    imageElement.alt = imageName; // Set alt attribute for accessibility
    
    const attributionElement = document.createElement("p");
    attributionElement.innerHTML = attribution;

    imagesContainer.appendChild(imageElement);
    imagesContainer.appendChild(attributionElement);
}
