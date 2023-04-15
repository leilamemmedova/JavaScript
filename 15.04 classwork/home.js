//1
let arr = [2, 4, -3, -43, 41, -3];
console.log(arr.filter((element) => element > 0));

//2
function isRectangular(a, b, c) {
  if (
    a ** 2 + b ** 2 == c ** 2 ||
    b ** 2 + a ** 2 == c ** 2 ||
    c ** 2 + a ** 2 == b ** 2 ||
    b ** 2 + c ** 2 == a ** 2
  ) {
    return "yes";
  } else {
    return "no";
  }
}
console.log(isRectangular(3, 4, 5));

//3
function nFactorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(nFactorial(4));

//4
const countries = [
  "finland",
  "denmark",
  "sweden",
  "azerbaijan",
  "norway",
  "iceand",
];
function maxLength(array) {
  let lenghtArray = array.map((el) => el.length);
  return array.find((el) => el.length == Math.max(...lenghtArray));
}
console.log(maxLength(countries));

//5
const webTechs = ["html", "CSS", "js", "React", "Redux"];
console.log(webTechs.filter((el) => el == el.toLocaleUpperCase()));

let arr2 = [
  {
    name: "test",
    key: 9,
  },
  {
    name: "task",
    key: 4,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 2,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 8,
  },
  {
    name: "test",
    key: 12,
  },
  {
    name: "last",
    key: 6,
  },
  {
    name: "tanqo",
    key: 1,
  },
  {
    name: "elephant",
    key: 13,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 7,
  },
  {
    name: "little",
    key: 10,
  },
];

//6
console.log(
  arr2.filter((element) => element.name[0].toLocaleLowerCase() === "t")
);

//7
console.log(
  arr2.filter(
    (element) =>
      element.name[0].toLocaleLowerCase() === "t" &&
      element.name[element.name.length - 1] === "t"
  )
);

//8
let lengthArray = arr2.map((el) => el.name.length);
// console.log(lengthArray);
// console.log(Math.max(...lengthArray));
let selectorObj = arr2.find((el) => el.name.length == Math.max(...lengthArray));
console.log(selectorObj.key);

//9
let newArr =arr2.filter((el) => el.name[0] ==="l" && el.key > 10 )
console.log(newArr)

//10
let keysArr = arr2.map((el) => el.key)
let nArr = arr2.find((el) => el.key == Math.max(...keysArr))
console.log(nArr)

//11
