// Get the current hour
const now = new Date();
const hour = now.getHours(); // returns 0 - 23

// Select a background color based on the time of day
let bgColor = "";

if (hour >= 6 && hour < 12) {
    // Morning: 6am - 12pm
    bgColor = "#FFDAB9"; // light peach
} else if (hour >= 12 && hour < 18) {
    // Afternoon: 12pm - 6pm
    bgColor = "#87CEFA"; // light sky blue
} else if (hour >= 18 && hour < 21) {
    // Evening: 6pm - 9pm
    bgColor = "#FFB6C1"; // light pink
} else {
    // Night: 9pm - 6am
    bgColor = "#2F4F4F"; // dark slate gray
}

// Apply the background color to the body
document.body.style.backgroundColor = bgColor;
