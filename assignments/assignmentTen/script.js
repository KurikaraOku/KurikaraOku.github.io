// text banner
const bannerTextElement = document.getElementById("bannerText");
const advertisements = [
    "The variety within these images is outstanding.",
    "Each image has been edited by our superior staff.",
    "Our sources are vecstock and wirestock.",
    "These pictures are really pretty.",
    "I think this is how I do it."
];
let currentIndex = 0;

// displays the advertisement banner and rotates through
function displayAdvertisement() {
    bannerTextElement.textContent = advertisements[currentIndex];
    currentIndex = (currentIndex + 1) % advertisements.length;
}
// display the first advertisement when the page loads
displayAdvertisement();

// using a set interval, rotate every 2 seconds
setInterval(displayAdvertisement, 2000);

// display the images and sources under to abide copyright
const images = {
    "garden.jpg": "<a href='https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4'>Image by vecstock</a> on Freepik",
    "golden.jpg": "<a href='https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4'>Image by wirestock</a> on Freepik",
    "mountain-lake.jpg": "<a href='https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7'>Image by wirestock</a> on Freepik",
    "small-house.jpg": "<a href='https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4'>Image by wirestock</a> on Freepik",
    "snow.jpg": "<a href='https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4'>Image by wirestock</a> on Freepik"
};

const imagesContainer = document.getElementById("images");

// loop through images and create images with attributions
for (const [imageName, attribution] of Object.entries(images)) {
    const imageElement = document.createElement("img");
    imageElement.src = "images/" + imageName;
    imageElement.alt = imageName; 
    
    const attributionElement = document.createElement("p");
    attributionElement.innerHTML = attribution;

    imagesContainer.appendChild(imageElement);
    imagesContainer.appendChild(attributionElement);
}
