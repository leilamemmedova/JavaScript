let resultValue = document.querySelector(".result-value");
let value1 = document.querySelector("#value1");
let value2 = document.querySelector("#value2");
let addition = document.querySelector(".addition");
let substract = document.querySelector(".substract");
let multiply = document.querySelector(".multiply");
let division = document.querySelector(".division");
let reset = document.querySelector(".reset");

resultValue.innerHTML = 0;
function calculateFunction(a, b) {
  typeof resultValue === "number";
  addition.addEventListener("click", function () {
    if (a.value === "" || b.value === "") {
      alert("value is empty");
    } else {
      let sum = parseFloat(a.value) + parseFloat(b.value);
      resultValue.innerHTML = sum;
    }
  });
  substract.addEventListener("click", function () {
    if (a.value === "" || b.value === "") {
      alert("value is empty");
    } else {
      let substract = parseFloat(a.value) - parseFloat(b.value);
      resultValue.innerHTML = substract;
    }
  });
  multiply.addEventListener("click", function () {
    if (a.value === "" || b.value === "") {
      alert("value is empty");
    } else {
      let multiply = parseFloat(a.value) * parseFloat(b.value);
      resultValue.innerHTML = multiply;
    }
  });
  division.addEventListener("click", function () {
    if (a.value === "" || b.value === "") {
      alert("value is empty");
    } else {
      let division = parseFloat(a.value) / parseFloat(b.value);
      resultValue.innerHTML = division;
    }
  });
  reset.addEventListener("click", function () {
    if (a.value === "" || b.value === "") {
      alert("value is empty");
    } else {
      a.value=""
      b.value=""
      resultValue.innerHTML=0
    }
  });
}

calculateFunction(value1, value2);
