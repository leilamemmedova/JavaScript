// //1
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr);

// //2
// const a = [3, "three", true];
// package;
// console.log(a);

// //3
// const arr1 = [0, 1, 2, 3, 4, 5];
// const arr2 = arr1;
// console.log(arr2);

// //4
// const arr3 = [1, 2, 3, 4, 5, 6];
// arr3.push(8, 9);
// console.log(arr3);

// //5
// const arr4 = [];
// arr4.push(5, 6, 7);
// arr4.pop();
// arr4.unshift(1);
// console.log(arr4);

// //6
// let arr5 = ["Leyla", "Mammedova", 20, "Quba"];
// arr5[3] = "Qusar";
// console.log(arr5);

// //7
// const arr6 = [1, 2, 3];
// for (let num of arr6) {
//   console.log(num);
// }

// //8
// const obj1 = {
//   objName: "Obj",
//   id: 1,
//   firstName: "Leyla",
//   lastName: "Mammedova",
//   location: "GDU 2",
// };
// console.log(obj1);

// //9
// const obj2 = obj1;
// console.log(obj2);

// //10

//1
let myText = "An Array is a collection of items of same data type stored at contiguous memory locations.";
let count = 0;
for (i = 0; i < myText.length; i++) {
  if (myText[i] == "a" || myText[i] == "A") {
    console.log(myText[i]);
    count++;
  }
}
console.log(count);

//2
const arr1 = [1, 2, 4, 5, 7, 9, 13, 22];
let s = 0;
for (i = 0; i < arr1.length; i++) {
  s += arr1[i];
}
console.log(s);

//3
const arr2 = [false, 0, 2, true, 23, undefined, "are u stack?", "come on"];
for (i = 0; i < arr2.length; i++) {
  if (i % 2 != 0) {
    console.log(arr2[i]);
  }
}

//4
let text1 = "How is it going?";
let newText = "";
for (i = 0; i < text1.length; i++) {
  if (text1[i] != "i") {
    newText += text1[i];
  }
}
console.log(newText);

//5
let add = 0;
const numbersArr = [2, false, "5", , "true", 9, 0, "1"];
for (i = 0; i < numbersArr.length; i++) {
  if (typeof numbersArr[i] === "number") {
    add += numbersArr[i];
  }
}
console.log(add);

//6
const mixType = [1, "3", 4, false, null, 22, true];
let textType = [];
for (i = 0; i < mixType.length; i++) {
  if (typeof (mixType[i] )!= "string") {
    mixType[i] = String(mixType[i]);
    textType.push(mixType[i]) ;
  }
}
console.log(textType);
