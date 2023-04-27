const nameInput = document.querySelector(".name");
const surnameInput = document.querySelector(".surname");
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const checkbox = document.querySelector(".checkbox");
const labelCheck = document.querySelector("#labelCheck");
const submitBtn = document.querySelector(".btn");
const submit = document.querySelector("#submit");
const radio = document.querySelectorAll(".radio");



nameInput.addEventListener("focus", function () {
  nameInput.style.background = "grey";
  nameInput.style.color = "white";
});
nameInput.addEventListener("mouseout", function () {
  nameInput.style.background = "transparent";
  nameInput.style.color = "black";
});

surnameInput.addEventListener("mouseover", function () {
  this.style.backgroundColor = "darkgreen";
  this.style.color = "white";
});
surnameInput.addEventListener("mouseout", function () {
  this.style.backgroundColor = "transparent";
  this.style.color = "black";
});
emailInput.addEventListener("contextmenu", function () {
  this.style.backgroundColor = "red";
  this.style.color = "white";
});
emailInput.addEventListener("mouseout", function () {
  this.style.backgroundColor = "transparent";
  this.style.color = "black";
});
passwordInput.addEventListener("focus", function () {
  this.value = "Leyla";
});
passwordInput.addEventListener("mouseout", function () {
  this.value = "";
});


radio.forEach((item) =>
  item.addEventListener("click", function () {
    alert("finished");
  })
);


checkbox.addEventListener("click", function () {
  if (checkbox.checked) {
    labelCheck.style.visibility = "visible";
  } else {
    labelCheck.style.visibility = "hidden";
  }
});

document.getElementById("submit").disabled=false
submitBtn.addEventListener("click",function(){
    if(nameInput.value && surnameInput.value && checkbox.checked ){
        submitBtn.disabled=true
    }
})


