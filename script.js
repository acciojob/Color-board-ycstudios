// Set initial background color to black
const container = document.querySelector('.container');

// Create 800 squares dynamically
for (let i = 1; i <= 800; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.backgroundColor = "rgb(0, 0, 0)"; // Set initial color
    container.appendChild(square);

    // Add event listeners to each square
    square.addEventListener('mouseover', () => {
        const randomColor = getRandomColor();
        square.style.backgroundColor = randomColor;

        // Revert back to default color after 1 second
        setTimeout(() => {
            square.style.backgroundColor = "rgb(0, 0, 0)"; // Revert to black
        }, 1000);
    });
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
