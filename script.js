// Get references to the HTML elements
const colorButton = document.getElementById("colorButton");
const greetingBox = document.getElementById("greetingBox");
const calculateButton = document.getElementById("calculateButton");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultBox = document.getElementById("result");

// Add a click event listener to the color button
colorButton.addEventListener("click", () => {
    // Change the button's color when clicked
    colorButton.style.backgroundColor = getRandomColor();
});

// Function to generate a random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add a click event listener to the calculate button
calculateButton.addEventListener("click", () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        resultBox.innerHTML = `Result: ${sum}`;
        resultBox.classList.remove("hidden");
    } else {
        resultBox.innerHTML = "Please enter valid numbers.";
        resultBox.classList.remove("hidden");
    }
});

// Display a greeting message based on the current time
const currentTime = new Date();
const currentHour = currentTime.getHours();

let greetingMessage;

if (currentHour < 12) {
    greetingMessage = "Good morning!";
} else if (currentHour < 18) {
    greetingMessage = "Good afternoon!";
} else {
    greetingMessage = "Good evening!";
}

greetingBox.innerHTML = greetingMessage;
greetingBox.classList.remove("hidden");
