// Define number operator and another number
let firstNumber;
let secondNumber;
let Operator;

// Functions for all basic math operators on calculators
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Function operate that takes an operator & 2 numbers and calls one of above functions on the numbers
function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Invalid operator";
  }
}

let screen = document.getElementById("screen");
let numberButtons = document.querySelectorAll(".number");
let operatorButtons = document.querySelectorAll(".operator");

// create function to populate display on number button click
function screenUpdate()









numberButtons.addEventListener("click", screenUpdate);