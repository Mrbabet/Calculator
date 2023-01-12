const prevNumber = document.querySelector(".previous-operation");
const mathSign = document.querySelector(".math-sign");
const currNumber = document.querySelector(".current-operation");
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equals");
const deleteBtn = document.querySelector(".delete");
const allClear = document.querySelector(".all-clear");

// All clear button

allClear.addEventListener("click", function () {
  currNumber.innerHTML = "";
  prevNumber.innerHTML = "";
  mathSign.innerHTML = "";
  result = "";
});

//Delete button
deleteBtn.addEventListener("click", function () {
  currNumber.innerHTML = currNumber.innerHTML.slice(0, -1);
});

//change symbol buton

// Event for clicking a number button and displayng it on the current number display
numberBtn.forEach((button) =>
  button.addEventListener("click", function () {
    if (currNumber.innerHTML === "" || currNumber.innerHTML === "0") {
      currNumber.innerHTML = currNumber.innerHTML + this.textContent; // +=
    }
    return;
  })
);

// operation function
operatorBtn.forEach((button) =>
  button.addEventListener("click", function () {
    if (currNumber !== "") {
      prevNumber.innerHTML = currNumber.innerHTML;
    }

    prevNumber.innerHTML = currNumber.innerHTML;
    mathSign.innerHTML = this.textContent;
    currNumber.innerHTML = "";
  })
);

// result function
equalBtn.addEventListener("click", function () {
  if (currNumber === "" || prevNumber === "") {
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
});
