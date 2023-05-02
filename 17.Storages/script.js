let button = document.querySelector(".submit");

//1\\
button.addEventListener("click", function () {
  localStorage.setItem("firstName", "Kamran");
  localStorage.setItem("lastName", "Akberov");
  localStorage.setItem("age", 23);
});

// //1.1\\
// for (let i = 0; i < localStorage.length; i++) {
//   console.log(localStorage.length);
// }

// //1.2\\
// for (let i = 0; i < localStorage.length; i++) {
//   let key = localStorage.key(i);
//   console.log(key);
// }

// //1.3\\
// for (let i = 0; i < localStorage.length; i++) {
//   let key = localStorage.key(i);
//   console.log(localStorage.getItem(key));
// }

// //4\\

// let key = localStorage.key(0);
// console.log(key);

// //4.1\\
// let arr=[]
// for (let i = 0; i < localStorage.length; i++) {
//   arr.push(localStorage.key(i));
// }
// console.log(arr);

// //5\\

// // let firstKey=localStorage.key(0)
// // let firstValue=localStorage.getItem(firstKey)
// // console.log(firstValue);

// console.log(localStorage.getItem(localStorage.key(0)))

// //5.1\\

// let newArr = [];
// for (let i = 0; i < localStorage.length; i++) {
//   let newKeys=localStorage.key(i)
//   let getValue=localStorage.getItem(newKeys)
//   newArr.push(getValue);
// }
// console.log(newArr)

//6\\
let deleteBtn=document.querySelector(".delete")
deleteBtn.addEventListener("click",function(){
    localStorage.removeItem(localStorage.key(0))
})

//6.1\\
let emptyBtn=document.querySelector(".empty")
emptyBtn.addEventListener("click",function(){
    localStorage.clear()
})


//7\\



// let arr = [];
// for (let i = 0; i < localStorage.length; i++) {
// //   let getKey = localStorage.key(i);
// //   let getValue = localStorage.getItem(getKey);
// //   arr.push(getValue);

//   arr.push(localStorage.getItem(localStorage.key(i)))
// }

// console.log(arr);



