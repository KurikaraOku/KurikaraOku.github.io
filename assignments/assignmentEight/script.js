// set Exercise 1 content by default
document.addEventListener("DOMContentLoaded", function() {
    switchTab('exercise1');
});

// switch between the exercise 1 and 2 tabs
function switchTab(exercise) {
    var commandTab = document.getElementById('commandTab');
    var exercise1Content = document.getElementById('exercise1Content');
    var exercise2Content = document.getElementById('exercise2Content');
    // hide all content on startup
    commandTab.style.display = 'none';
    exercise1Content.style.display = 'none';
    exercise2Content.style.display = 'none';
    // show the corresponding tab for each exercise
    if (exercise === 'exercise1') {
        exercise1Content.style.display = 'block';
    } else if (exercise === 'exercise2') {
        exercise2Content.style.display = 'block';
    }
}

// function to change the image file based on latest input
function changeImage() {
    var textInput = document.getElementById("textInput").value.trim().toLowerCase();
    var imageContainer = document.getElementById("imageContainer");
    // Remove any existing images
    while (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.firstChild);
    }
    // read the last input as a character, eliminates empty image
    var lastChar = textInput.charAt(textInput.length - 1);

    // set a letter for the corresponding image
    var imageSources = {
        'b': 'images/read.jpg',
        'c': 'images/clown.jpg',
        'p': 'images/birthday.jpg',
        'r': 'images/rain.jpg',
        's': 'images/shovel.jpg',
        'w': 'images/work.jpg'
    };

    // check if the last character matches above
    if (lastChar in imageSources) {
        var image = document.createElement('img');
        image.src = imageSources[lastChar];
        image.alt = 'Image';
        imageContainer.appendChild(image);
    } else {}
}

// function to append the 8 yoga images to the slider
var slider = document.getElementById('slider');
var previewImage = document.getElementById('previewImage');
var numImages = 8;

slider.addEventListener('input', function() {
    var value = parseInt(this.value);
    var imageIndex = Math.floor((value / 100) * numImages) + 1;
    var imagePath;
    // 
    if (value === 100) {
        // if the slider is at max display the last image
        imagePath = 'images/yoga' + numImages + '.jpg';
    } else {
        // calculate the image path based on the slider position
        imagePath = 'images/yoga' + imageIndex + '.jpg';
    }
    previewImage.src = imagePath;
});