///////////1\\
//1)
function reverseString(str) {
  return str.split("").reverse("").join("");
}
console.log(reverseString("Leyla"));
console.log(reverseString("Mahammad"));

//2)
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverseString("hello world"));

/////////2\\
function isPolidrom(word) {
  if (word === word.split("").reverse("").join("")) {
    return `Yes ${word} is polidrom`;
  } else return `No ${word} is not polidrom`;
}
console.log(isPolidrom("Hello"));

/////////3\\
let arr1 = [1, 2, 2, 2, 11, 4, 5, 4, 11];

//1)
// function removeDublicated(arr){
//    return arr.filter((el,index)=> arr.indexOf(el)===index)
// }
// console.log(removeDublicated(arr1))

//2)
function removeDublicated(arr) {
  let result = [];
  arr.forEach((el) => {
    !result.includes(el) && result.push(el);
  });
  return result;
}
console.log(removeDublicated(arr1));

//3)
let mySet = new Set(arr1);
console.log([...mySet]);

//////////4\\
function generateOtp() {
  let digits = "0123456789";
  let num=""
  for (let i = 0; i < 4; i++) {
    num+=digits[Math.floor(Math.random()*10)]
  }
  return num
}
console.log(generateOtp())