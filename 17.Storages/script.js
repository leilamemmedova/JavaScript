let button = document.querySelector(".submit");

//1\\
button.addEventListener("click", function () {
  localStorage.setItem("firstName", "Kamran");
  localStorage.setItem("lastName", "Akberov");
  localStorage.setItem("age", 23);
});

//1\\
// for (let i = 0; i < localStorage.length; i++) {
//   console.log(localStorage.length);
// }

//2\\
// for (let i = 0; i < localStorage.length; i++) {
//   console.log(localStorage.key(i));
// }

//3\\
// for (let i = 0; i < localStorage.length; i++) {
//   let keys=localStorage.key(i)
//   let values=localStorage.getItem(keys)
//   console.log(values)

//   console.log(localStorage.getItem(localStorage.key(i)));
// }

//4\\
// console.log(localStorage.key(0));

//4.1\\
// let arr = [];
// for (let i = 0; i < localStorage.length; i++) {
//   arr.push(localStorage.key(i));
// }
// console.log(arr)

//5\\
// console.log(localStorage.getItem(localStorage.key(0)));

//5.1\\
// let arr=[]
// for (let i = 0; i < localStorage.length; i++) {
//   arr.push(localStorage.getItem(localStorage.key(i)));
// }
// console.log(arr);

//6\\
// let deleteBtn=document.querySelector(".delete")
// deleteBtn.addEventListener("click" , function(){
//   localStorage.removeItem(localStorage.key(0))
// })

//6.1\\
// let emptyBtn = document.querySelector(".empty");
// emptyBtn.addEventListener("click", function () {
//   localStorage.clear();
// });



