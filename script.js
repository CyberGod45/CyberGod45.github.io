// Get the canvas and context
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

// Load the PNG image
const image = new Image();
image.src = 'UQdYKRU.png'; // Replace 'your_image.png' with your image file

// Define the initial position
let x = 0;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the image
    ctx.drawImage(image, x, 0);

    // Update the position
    x += 1; // Adjust the speed as needed

    // Reset the position when the image goes off-screen
    if (x > canvas.width) {
        x = -image.width;
    }
}

// Start the animation
image.onload = function() {
    animate();
};
