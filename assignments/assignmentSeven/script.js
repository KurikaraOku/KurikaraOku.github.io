// script.js

// counter for image changes
let imageCounter = 1;
// function to change images
function changeImage() {
    const imageElement = document.getElementById('imageToggle');
    // if imagecounter is 1, swap to 2, vice versa, 
    // swaps the images based on their counter number and jpg file
    if (imageCounter === 1) {
        imageElement.src = '1.jpg';
        imageCounter = 2;
    } else {
        imageElement.src = '2.jpg';
        imageCounter = 1;
    }
}
// function to rotate square and apply CSS transformation to rotate
function rotateSquare(degrees) {
    const rotatingSquare = document.getElementById('rotatingSquare');
    rotatingSquare.style.transform = `rotate(${degrees}deg)`;
}

// start the counter at zero, keep track of stars
let starCount = 0;
// function to add a star vertically in column 3
function addStar() {
    if (starCount < 14) {
        const lastColumn = document.querySelector('.container .column:last-child');
        const star = document.createElement('img');
        star.src = 'star.png';
        star.className = 'star';
        star.style.width = '30px';
        star.style.height = '30px';
        lastColumn.appendChild(star);
        // Increment star counter
        starCount++;
    } else {
        alert("You've reached the maximum limit of stars (14)!");
    }
}