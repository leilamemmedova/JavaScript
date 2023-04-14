//////////////////////////////////////1.Return the First Element in an Array.

let arr1 = [1, 2, 3];
let arr2 = [80, 5, 100];
let arr3 = [-500, 0, 50];
function getFirstValue(anyArray) {
  return anyArray[0];
}

console.log(getFirstValue(arr1));
console.log(getFirstValue(arr2));
console.log(getFirstValue(arr3));

///////////////////////////////////////2.Return the Last Element in an Array.

let arr4 = [1, 2, 3];
let arr5 = ["cat", "dog", "duck"];
let arr6 = [true, false, true];
function getLastItem(anyArray) {
  return anyArray[2];
}
console.log(getLastItem(arr4));
console.log(getLastItem(arr5));
console.log(getLastItem(arr6));

/////////////////////////////////////3.Find the Index
let indexString = function (arr, str) {
  for(i=0 ;i<arr.length ;i++){
    if(arr[i]==str){
      return(i)
    }else{
      continue
    }
  }
  // return arr.indexOf(str);
};
console.log(indexString(["hi", "edabit", "fgh", "abc"], "fgh"));
console.log(indexString(["Red", "blue", "Blue", "Green"], "blue"));
console.log(indexString(["a", "g", "y", "d"], "d"));
console.log(
  indexString(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")
);

//////////////////////////////////////4.Return the Sum of Two Numbers.

function addition(a, b) {
  return a + b;
}
console.log(addition(3, 2));
console.log(addition(-3, -6));
console.log(addition(7, 3));

//////////////////////////////////////////5.Less Than 100?
let lessThan100 = (a, b) => {
  if (a + b < 100) {
    return true
  } else {
    return false
  }

};
console.log("22 and 15",lessThan100(22,15));
console.log("83 and 34",lessThan100(83,34));
console.log("3 and 77",lessThan100(3,77));

/////////////////////////////////////////6.Volume of a Box

let obj1 = {
  width: 2,
  length: 5,
  height: 1,
};
let obj2 = {
  width: 4,
  length: 2,
  height: 2,
};
let obj3 = {
  width: 2,
  length: 3,
  height: 5,
};
function volumeBox(anyObj) {
  return anyObj;
}
console.log("obj1", volumeBox(obj1.height * obj1.length * obj1.width));
console.log("obj2", volumeBox(obj2.height * obj2.length * obj2.width));
console.log("obj3",volumeBox(obj3.height * obj3.length * obj3.width));

//////////////////////////////////////////7.Basketball Points

function score(twoPoint, threePoint) {
  return 2 * twoPoint + 3 * threePoint;
}
console.log("score1", score(1, 1));
console.log("score2", score(7, 5));
console.log("score3", score(38, 8));

//////////////////////////////////////////8.Create a function
const arr9 = [
    {
        firstName: "Leyla",
        lastName: "Mammedova",
        myCity: "Ganja",
    },
];
let newInfo=[]
function fillInfo() {
  for (item of arr9) {
    firstName = "Ulfat";
    lastName = "Zakirli";
    myCity = "Baku";
  }
  return newInfo.push(structuredClone(arr9));
}
console.log(fillInfo);
