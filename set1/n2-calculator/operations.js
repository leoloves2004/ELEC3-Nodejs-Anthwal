/*
Name: Leomhel P. Anthwal
Section: IV-BSIT C
Activity: N2 - Modular Calculator
Date: November 16, 2026
*/

// Addition
function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }

    return a / b;
}

// Average
function average(a, b) {
    return (a + b) / 2;
}

// Export functions for use in index.js
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    average
};
