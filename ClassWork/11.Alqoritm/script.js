//////////////////1
const arr = [
  "d",
  7,
  "1",
  "7",
  7,
  0,
  "c",
  "a",
  undefined,
  7,
  "3",
  false,
  1,
  null,
];

//1.1\\
// console.log(arr.slice(1, arr.length-1))

// //1.2\\
// console.log(arr.slice(arr.length-3))

// //1.3\\
// console.log([true,'8','myName'].concat(arr))

// //1.4\\
// console.log(arr.indexOf(7, 3))

// //1.5\\
// console.log(arr.filter((el)=> !el==false))

// //1.6\\
// console.log(arr.reduce((sum,prev)=> Number.isInteger(prev) ?sum+=prev :sum ,0))

// //1.7\\
// // console.log(arr.reduce((sum,prev)=> !Number.isNaN(prev) ?sum+=prev :sum ,0))
// console.log(arr.filter((el)=> !el ).length)

////////////////////2

//2.1\\

console.log(
  findSmallest({
    cyan: 23,
    magenta: 12,
    yellow: 10,
  })
); // 10

console.log(
  findSmallest({
    cyan: 432,
    magenta: 543,
    yellow: 777,
  })
); // 432

console.log(
  findSmallest({
    cyan: 700,
    magenta: 700,
    yellow: 0,
  })
); // 0

function findSmallest(inks) {
//   return Math.min.apply(null,Object.values(inks));
  return Math.min(...Object.values(inks));
}

//2.2\\

function maxNums(array){
  return  array.map((el)=> Math.max(...el) )
}

console.log(maxNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); //[7, 90, 2]
console.log(maxNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])); // [-34, -2, 7]

//2.3\\

function findLetterIndex (text,letter){
    return [text.indexOf(letter), text.lastIndexOf(letter)]
};

console.log(findLetterIndex("hello", "l")); // [2,3]
console.log(findLetterIndex("happy", "h")); //[0, 0]

////2.4///
function checkNum(arr, n){
    return arr.some((item)=>arr.includes(n-item))
}

console.log(checkNum([10, 12, 4, 7, 9, 11], 16));  //true
console.log(checkNum([2, 8, 9, 12, 45, 78], 1)); //false
console.log(checkNum([0, 9, 7, 23, 19, 18, 17, 66], 39)); //false