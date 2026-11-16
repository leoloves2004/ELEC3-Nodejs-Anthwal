/*
Name: Leomhel P. Anthwal
Section: IV-BSIT C
Activity: N2 - Modular Calculator
Date: November 16, 2026
*/

// Import custom modules using CommonJS
const operations = require("./operations");
const formatter = require("./formatter");

// Import a built-in Node.js module
const os = require("os");

// Get command-line arguments
const operation = process.argv[2];
const firstNumber = Number(process.argv[3]);
const secondNumber = Number(process.argv[4]);

// Check if all required arguments are provided
if (
    !operation ||
    process.argv[3] === undefined ||
    process.argv[4] === undefined
) {
    console.log("Error: Missing arguments.");
    console.log("Usage: node index.js <operation> <number1> <number2>");
    console.log("Example: node index.js add 12 8");
    process.exit(1);
}

// Check if the numbers are valid
if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
    console.log("Error: Please enter valid numbers.");
    process.exit(1);
}

// Perform the selected operation
try {
    let result;

    switch (operation.toLowerCase()) {
        case "add":
            result = operations.add(firstNumber, secondNumber);
            break;

        case "subtract":
            result = operations.subtract(firstNumber, secondNumber);
            break;

        case "multiply":
            result = operations.multiply(firstNumber, secondNumber);
            break;

        case "divide":
            result = operations.divide(firstNumber, secondNumber);
            break;

        case "average":
            result = operations.average(firstNumber, secondNumber);
            break;

        default:
            throw new Error("Unknown operation: " + operation);
    }

    // Display the result using formatter.js
    formatter.displayResult(
        operation.toLowerCase(),
        firstNumber,
        secondNumber,
        result
    );

    // Display information using the built-in os module
    console.log("Operating System: " + os.platform());

} catch (error) {
    console.log("Error: " + error.message);
    process.exitCode = 1;
}
