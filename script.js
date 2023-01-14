"use strict";

const prevNumber = document.querySelector(".previous-operation");
const mathSign = document.querySelector(".math-sign");
const currNumber = document.querySelector(".current-operation");
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equals");
const deleteBtn = document.querySelector(".delete");
const allClear = document.querySelector(".all-clear");

let result = "";

// All clear function

const clearAll = function () {
  currNumber.innerHTML = "";
  prevNumber.innerHTML = "";
  mathSign.innerHTML = "";
  result = "";
};

//Delete function

const deleteFunction = function () {
  currNumber.innerHTML = currNumber.innerHTML.slice(0, -1);
};

//change symbol buton

const numberInput = function () {
  if (this.textContent === "." && currNumber.innerHTML.includes(".")) return;
  if (this.textContent === "." && currNumber.innerHTML === "")
    return (currNumber.innerHTML = "0.");
  currNumber.innerHTML = currNumber.innerHTML + this.textContent;
};

// operation function

const operation = function () {
  if (currNumber.innerHTML === "" && this.textContent === "-") {
    currNumber.innerHTML = "-";
    return;
  } else if (currNumber.innerHTML === "0") {
    return;
  }

  prevNumber.innerHTML = currNumber.innerHTML;
  mathSign.innerHTML = this.textContent;
  currNumber.innerHTML = "";
};

// result function
const showResult = function () {
  if (prevNumber === "" || currNumber === "") {
    return;
  }
  let a = Number(currNumber.innerHTML);
  let b = Number(prevNumber.innerHTML);
  let operator = mathSign.innerHTML;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = b - a;
      break;
    case "*":
      result = a * b;
      console.log(result);
      break;
    case "/":
      result = b / a;
      console.log(result);
      break;
    case "x^2":
      result = b ** a;
      console.log(result);
      break;
  }
  currNumber.innerHTML = result;
  prevNumber.innerHTML = "";
  mathSign.innerHTML = "";
};

allClear.addEventListener("click", clearAll);

deleteBtn.addEventListener("click", deleteFunction);

numberBtn.forEach((button) => button.addEventListener("click", numberInput));

operatorBtn.forEach((button) => button.addEventListener("click", operation));

equalBtn.addEventListener("click", showResult);
