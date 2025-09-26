
// Get the current hour
const now = new Date();
const hour = now.getHours(); // returns 0 - 23

// Selecting the image based on time of day
let imgSrc = "";

if (hour >= 6 && hour < 12) {
    // Morning: 6am - 12pm
    imgSrc = "images/morning.jpeg"; // morning image path
} else if (hour >= 12 && hour < 18) {
    // Afternoon: 12pm - 6pm
    imgSrc = "images/afternoon.jpeg"; //  afternoon image path
} else if (hour >= 18 && hour < 21) {
    // Evening: 6pm - 9pm
    imgSrc = "images/nighttime.jpeg"; //  evening image path
} else {
    // Night: 9pm - 6am
    imgSrc = "images/nighttime.jpeg"; // night image path
}


const timeImage = document.getElementById("timeImage");
if (timeImage) {
    timeImage.src = imgSrc;
}
