/*
Name: Leomhel P. Anthwal
Section: IV-BSIT C
Activity: N2 - Modular Calculator
Date: November 16, 2026
*/

// Format and display the calculator result
function displayResult(operation, a, b, result) {
    console.log("================================");
    console.log("       MODULAR CALCULATOR       ");
    console.log("================================");
    console.log("Name: Leomhel P. Anthwal");
    console.log("Section: IV-BSIT C");
    console.log("--------------------------------");
    console.log("Operation: " + operation);
    console.log("First Number: " + a);
    console.log("Second Number: " + b);
    console.log("Result: " + result);
    console.log("================================");
}

// Export the function for use in index.js
module.exports = {
    displayResult
};
