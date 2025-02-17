//your JS code here. If required.
const container = document.querySelector('.container');

// Create 800 squares dynamically
for (let i = 1; i <= 800; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

// Select all squares
const squares = document.querySelectorAll('.square');

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add event listeners to each square
squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        const randomColor = getRandomColor();
        square.style.backgroundColor = randomColor;

        // Revert back to default color after 1 second
        setTimeout(() => {
            square.style.backgroundColor = "";
        }, 1000);
    });