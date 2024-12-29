// script.js

// 1. Color Changing Button
const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', function () {
    // Generate a random color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    colorButton.style.backgroundColor = randomColor;
});

// 2. Greeting Message Alert
const greetButton = document.getElementById('greetButton');
greetButton.addEventListener('click', function () {
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = 'Good Morning!';
    } else if (currentHour < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }

    alert(greeting);
});

// 3. Basic Calculator
const calculatorForm = document.getElementById('calculatorForm');
const calcResult = document.getElementById('calcResult');

calculatorForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sum = num1 + num2;
    calcResult.textContent = `Result: ${sum}`;
});
