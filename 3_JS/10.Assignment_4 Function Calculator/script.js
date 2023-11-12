var displayDiv = document.querySelector("#display");
displayDiv.innerHTML = "";
var displayResult = document.querySelector("#equals");
var firstNumber = 0;
var operator;
var result;

function press(element) {
    displayDiv.innerText += element;
}

function setOP(element) {
    operator = element;
    firstNumber = Number(displayDiv.innerText);
    displayDiv.innerText = "";
}

function clr() {
    displayDiv.innerText = "";
}

function calculate() {
    firstNumber = Number(firstNumber);
    secondNumber = Number(displayDiv.innerText);

    if (operator === '+') {
        result = firstNumber + secondNumber;
    } else if (operator === '-') {
        result = firstNumber - secondNumber;
    } else if (operator === '*') {
        result = firstNumber * secondNumber;
    } else if (operator === '/') {
        result = firstNumber / secondNumber;
    }

    displayDiv.innerText = result;
    operator = undefined;

}
