let resultValue = document.querySelector(".result-value");
let value1 = document.querySelector("#value1");
let value2 = document.querySelector("#value2");
let addition = document.querySelector(".addition");
let substract = document.querySelector(".substract");
let multiply = document.querySelector(".multiply");
let division = document.querySelector(".division");
let reset = document.querySelector(".reset");

resultValue.innerHTML = 0;
  typeof resultValue === "number";
  addition.addEventListener("click", function () {
    if (value1.value === "" || value2.value === "") {
      alert("value is empty");
    } else {
      let sum = parseFloat(value1.value) + parseFloat(value2.value);
      resultValue.innerHTML = sum;
    }
  });
  substract.addEventListener("click", function () {
    if (value1.value === "" || value2.value === "") {
      alert("value is empty");
    } else {
      let substract = parseFloat(value1.value) - parseFloat(value2.value);
      resultValue.innerHTML = substract;
    }
  });
  multiply.addEventListener("click", function () {
    if (value1.value === "" || value2.value === "") {
      alert("value is empty");
    } else {
      let multiply = parseFloat(value1.value) * parseFloat(value2.value);
      resultValue.innerHTML = multiply;
    }
  });
  division.addEventListener("click", function () {
    if (value1.value === "" || value2.value === "") {
      alert("value is empty");
    } else {
      let division = parseFloat(value1.value) / parseFloat(value2.value);
      resultValue.innerHTML = division;
    }
  });
  reset.addEventListener("click", function () {
    if (value1.value === "" || value2.value === "") {
      alert("value is empty");
    } else {
      value1.value=""
      value2.value=""
      resultValue.innerHTML=0
    }
  });

