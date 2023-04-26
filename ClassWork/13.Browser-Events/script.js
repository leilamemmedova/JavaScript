const form = document.createElement("form");
const nameLabel = document.createElement("label");
const nameInput = document.createElement("input");
const surnameLabel = document.createElement("label");
const surnameInput = document.createElement("input");
const checkbox = document.createElement("input");
const radio1 = document.createElement("input");
const radio2 = document.createElement("input");
const submitButton = document.createElement("button");
const letsButton = document.createElement("button");
const time = document.createElement("p");
const nextButton =document.createElement("button")

nameInput.setAttribute("required", "");
surnameInput.setAttribute("required", "");
checkbox.setAttribute("required", "");
checkbox.setAttribute("type", "checkbox");
radio1.setAttribute("type", "radio");
radio1.setAttribute("type", "radio");
radio2.setAttribute("type", "radio");
radio2.setAttribute("required","");
radio1.name="radio"
radio2.name="radio"
letsButton.id="lets"
submitButton.id="submit"
nextButton.id="next"



document.body.append(letsButton);
document.body.append(time)
document.body.append(form);
form.append(nameLabel);
form.append(nameInput);
form.append(surnameLabel);
form.append(surnameInput);
form.append(checkbox);
form.append(radio1);
form.append(radio2);
form.append(submitButton);
document.body.append(nextButton)

form.style.height = "100vh";
form.style.display = "flex";
form.style.justifyContent = "center";
form.style.alignItems = "center";
form.style.border = "1px dashed black";
form.style.flexDirection = "column";
form.style.gap = "0 20px";

checkbox.style.accentColor = "red";
radio2.style.accentColor = "blue";
radio1.style.accentColor = "blue";

time.style.border="1px solid black"
time.style.width="100px"
time.style.height="30px"
time.style.display="flex"
time.style.justifyContent="center"
time.style.alignItems="center"

letsButton.innerHTML = "Let's start...";
nameLabel.innerHTML = "Name";
surnameLabel.innerHTML = "Surname";
submitButton.innerHTML = "Submit";
time.innerHTML=`00:${15}`

document.getElementById("submit").disabled=true

let interval;
let counter = 15;
letsButton.addEventListener("click", function(){
    interval=setInterval(()=>{
        // time.innerHTML=`00:${time}`
        counter-=1
        time.innerText=`00:${counter}`
        document.getElementById("submit").disabled=false

        if(counter<10){
            time.style.borderColor="red"
            time.style.color="red"
        }
        if(counter===0){
            time.innerHTML="You missed ):"
            clearInterval(interval)
        }
    },1000)

})



nextButton.innerHTML="Next Page >"

let interval2;
nextButton.addEventListener("click",function(){
    alert("finished")
})

