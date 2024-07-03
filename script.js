// Define number operator and another number
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

const store = {
  firstNumber: "",
};

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
  }
}

let screen = document.getElementById("screen");

let numberButtons = document.querySelectorAll("#digits button"); // THIS IS A NODE LIST, ITERATE IT
let operatorButtons = document.querySelectorAll("#operators button");
let clearButton = document.querySelector("#clear button");

numberButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    handleNumInput(button.textContent);
  });
});

function handleNumInput(number) {
  const didClickOperatorYet = operator !== "";
  // if they didn't click operator yet,
  if (!didClickOperatorYet) {
    // put the button's text on the screen
    store.firstNumber += Number(number);
    screen.textContent = store.firstNumber;
    // to make sure it works
    console.log("1st number: " + store.firstNumber);
  } else {
    secondNumber += Number(number);
    screen.textContent = secondNumber;
    console.log("2nd number: " + secondNumber);
  }

  //
}

operatorButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.textContent === "=") {
      if (store.firstNumber !== "" && secondNumber !== "") {
        result = operate(
          operator,
          parseFloat(store.firstNumber),
          parseFloat(secondNumber)
        );
        screen.textContent = result;
        console.log(result);
        store.firstNumber = result.toString();
        secondNumber = "";
        operator = "";
      } else {
        screen.textContent = "Error";
      }
    } else {
      // Handle other operator buttons
      operator = button.textContent;
      screen.textContent = operator;
      if (store.firstNumber !== "" && secondNumber !== "") {
        result = operate(
          operator,
          parseFloat(store.firstNumber),
          parseFloat(secondNumber)
        );
        store.firstNumber = result.toString();
        screen.textContent = ""; // Clear the screen
      }
      console.log("operator: " + operator);
      secondNumber = "";
    }
  });
});

// AC Button
clearButton.addEventListener("click", function () {
  store.firstNumber = "";
  secondNumber = "";
  operator = "";
  screen.textContent = "";
});

// handle keyboard input
window.addEventListener("keydown", function (event) {
  console.log("🚀 ~ event:", event);
  // handleNumInput(event.key);
  // click the appropriate button
  const button = document.querySelector(`button[data-key="${event.key}"]`);
  button?.click();
});
