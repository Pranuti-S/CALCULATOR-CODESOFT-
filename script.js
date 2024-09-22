// Append the clicked value to the display
function appendValue(value) {
    document.getElementById('result').value += value;
}

// Clear the display screen
function clearScreen() {
    document.getElementById('result').value = '';
}

// Delete the last character from the display
function deleteNumber() {
    let currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
}

// Calculate the result from the current expression
function calculateResult() {
    let currentValue = document.getElementById('result').value;
    try {
        let result = eval(currentValue);  // Evaluate the expression
        document.getElementById('result').value = result;  // Show the result
    } catch (error) {
        document.getElementById('result').value = "Error";  // Show error if there's an invalid expression
    }
}
