function simpleCal() {
    // 1. Ask the user to enter the first number
    let num1 = parseFloat(prompt("Enter the first number:"));
    if (isNaN(num1)) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }

    // 2. Ask the user to enter the second number
    let num2 = parseFloat(prompt("Enter the second number:"));
    if (isNaN(num2)) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }

    // 3. Present a menu allowing the user to select the operation
    let operation = prompt(
        "Select the operation:\n" +
        "1. Addition\n" +
        "2. Subtraction\n" +
        "3. Multiplication\n" +
        "4. Division\n" +
        "Enter the number corresponding to the desired operation:");

    let result;

    // 4. Perform the selected operation using variables and display the result in the console
    if (operation == '1') {
        result = num1 + num2;
        console.log("Result: " + num1 + " + " + num2 + " = " + result);
    } else if (operation == '2') {
        result = num1 - num2;
        console.log("Result: " + num1 + " - " + num2 + " = " + result);
    } else if (operation == '3') {
        result = num1 * num2;
        console.log("Result: " + num1 + " * " + num2 + " = " + result);
    } else if (operation == '4') {
        if (num2 === 0) {
            console.log("Error: Division by zero is not allowed.");
        } else {
            result = num1 / num2;
            console.log("Result: " + num1 + " / " + num2 + " = " + result);
        }
    } else {
        console.log("Invalid operation. Please select a number between 1 and 4.");
    }
}

