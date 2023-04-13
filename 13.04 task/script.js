//1

const arr1 = ["a", "b", "c", "d", "e", "f", "j", "k", "y", "u"];
function getRandomLetter(anyArr) {
  return anyArr[Math.floor(Math.random() * arr1.length)];
}
console.log(getRandomLetter(arr1));

//2

const arr2 = [1, 2, 3, 4, 14, 5, 6, 8];
let sum = 0;
function calcSum() {
  //   for (i = 0; i < arr2.length; i++) {
  //     if (arr2[i] % 2 != 0) {
  //       sum += arr2[i];
  //     }
  //   }
  for (let item of arr2) {
    if (item % 2 == 0) {
      sum += item;
    }
  }

  return sum;
}
console.log(calcSum());

//3

const arr3 = [-3, -5, -9, 3, 0, true, false, -22];
let positiveNum = [];
function getPositiveNam() {
  for (i = 0; i < arr2.length; i++) {
    positiveNum.push(Math.abs(Number(arr3[i])));
  }
  return positiveNum;
}
console.log(getPositiveNam());

//4

const arr4 = [4, 9, 16, 18, 30, 36, 50];
const newArr = [];
const calcSquareRoot = (x) => {
  for (let i = 0; i < x.length; i++) {
    newArr.push(parseInt(Math.sqrt(x[i])));
  }
  return newArr;
};
console.log(calcSquareRoot(arr4));
