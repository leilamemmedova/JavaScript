let startBtn = document.querySelector(".startbtn");
let stopBtn = document.querySelector(".stopbtn");
let result = document.querySelector(".result");
let incrementBtn = document.querySelector(".increment");
let decrementBtn = document.querySelector(".decrement");
let resetBtn = document.querySelector(".reset");
let inputBtn = document.querySelector(".inputbtn");

let interval;
counter = 0;
startBtn.addEventListener("click", function () {
  interval = setInterval(() => {
    counter++;
    result.innerText = counter;
  }, 1000);
});
stopBtn.addEventListener("click", function () {
  clearInterval(interval);
});

resetBtn.addEventListener("click", function () {
  result.innerText = 0;
  counter = 0;
  clearInterval(interval);
});
incrementBtn.addEventListener("click", function () {
    counter++
  result.innerText = counter+=1;
});
decrementBtn.addEventListener("click", function () {
    counter++
  result.innerText = counter-=1;
});

////BONUS:
let interval2;
inputBtn.addEventListener("click", function () {
  interval2 =Number(document.getElementById("four").value)
  counter=interval2+counter
  result.innerText=counter
});
