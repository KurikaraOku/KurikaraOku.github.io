// script.js
let animationInterval;
let ballPosition = 0;
let ballDirection = 1;

function toggleStartStop() {
    const startStopText = document.getElementById("startStopText");
    if (startStopText.textContent === "Start") {
        startStopText.textContent = "Stop";
        startAnimation();
    } else {
        startStopText.textContent = "Start";
        stopAnimation();
    }
}

// move the ball up and down using a setInterval, adjust speed with the number after the comma
function startAnimation() {
    animationInterval = setInterval(moveBall, 5);
}

function stopAnimation() {
    clearInterval(animationInterval);
}


function moveBall() {
    // get the ball element and the height of the max area
    const ball = document.getElementById("ball");
    const bounceAreaHeight = document.getElementById("bounceArea").clientHeight;
    // update the position of the ball
    ballPosition += 2 * ballDirection;
    ball.style.top = ballPosition + "px";

    if (ballPosition >= bounceAreaHeight - ball.clientHeight || ballPosition <= 0) {
        ballDirection *= -1;
    }
}

// toggle between exercise one and two
function toggleExercise(exerciseId) {
    document.querySelectorAll(".exercise-content").forEach(function(content) {
        content.classList.remove("active");
    });
    // show clicked exercise content
    const exerciseContent = document.getElementById(exerciseId);
    exerciseContent.classList.add("active");
}

// populate images to exercise 2
function populateImages() {
    const imageContainer = document.getElementById("imageContainer");

    // list images in src folder
    const imageFilenames = [
        "yoga1.jpg",
        "yoga2.jpg",
        "yoga3.jpg",
        "yoga4.jpg",
        "yoga5.jpg",
        "yoga6.jpg",
        "yoga7.jpg",
        "yoga8.jpg",
    ];

    // contain descriptions
    const imageDescriptions = [
        "downward dog",
        "bend it over",
        "reach for the sky",
        "side stretch",
        "shimmy shimmy cocoa puff",
        "fusion dance",
        "fight stance",
        "peasant beg",
    ];

    // loop through each image and create elements
    imageFilenames.forEach((filename, index) => {
        const imageUrl = "images/" + filename;

        // container for each image and its description
        const container = document.createElement("div");
        container.classList.add("image-container");
        imageContainer.appendChild(container);

        // create image element
        const image = document.createElement("img");
        image.src = imageUrl;
        image.alt = "Image " + (index + 1);
        image.style.width = "100px";
        image.style.height = "auto";
        image.style.cursor = "pointer";
        container.appendChild(image);

        // create description element
        const description = document.createElement("p");
        description.textContent = imageDescriptions[index];
        description.classList.add("image-description");
        container.appendChild(description);

        // attach onclick to image for description
        image.onclick = function() {
            description.style.display = "block";
        };
    });
}
populateImages(); // call the function to populate Exercise 2 with images