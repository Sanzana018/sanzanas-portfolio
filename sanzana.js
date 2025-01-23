const textArray = ["Web Designer", "Developer", "UI/UX Designer", "Frontend Developer", "Full-stack Developer"];
let index = 0;
let textElement = document.querySelector('.typing-text');

// Function to update content dynamically
function updateText() {
    textElement.textContent = textArray[index];
    index = (index + 1) % textArray.length;
}

// Initial update and then loop through the words
setInterval(updateText, 8000);  // Changes text every 8 seconds
