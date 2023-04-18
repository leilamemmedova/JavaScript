///////////1\\

let names1 = ["Adam", "Sarah", "Malcolm"]; //"ASM"
let names2 = ["Harry", "Newt", "Luna", "Cho"]; //"CHLN"
let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]; //"CJMPRR"

function secretName(anyNames) {
  return anyNames.map((el) => el[0]).join("");
}
console.log(secretName(names1.sort((a, b) => a.localeCompare(b))));
console.log(secretName(names2.sort((a, b) => a.localeCompare(b))));
console.log(secretName(names3.sort((a, b) => a.localeCompare(b))));

///////////2\\

const users = [
  { name: "Anar", surname: "Hesenli", age: "22", uni: "ADA", gender: "male" },
  {
    name: "Nezrin",
    surname: "Reshidova",
    age: "23",
    uni: "UNEC",
    gender: "female",
  },
  {
    name: "Hikmet",
    surname: "Hesenova",
    age: "22",
    uni: "UNEC",
    gender: "male",
  },
  { name: "Nicat", surname: "Sadiqov", age: "25", uni: "UNEC", gender: "male" },
  {
    name: "Murad",
    surname: "Salmanli",
    age: "23",
    uni: "ADNSU",
    gender: "male",
  },
  {
    name: "Aynure",
    surname: "Hesenzade",
    age: "23",
    uni: "BMU",
    gender: "female",
  },
];

//1\\
console.log(
  users.filter(
    (item) =>
      item.uni === "UNEC" && item.surname.toLocaleLowerCase().startsWith("r")
  )
);

//2\\
console.log(
  users.filter(
    (item) => item.age === "22" && item.name.toLocaleLowerCase().startsWith("a")
  )
);

//3\\
console.log(
  users.map((item) =>
    item.gender === "male" ? `MR ${item.name}` : `Ms ${item.name}`
  )
);

//4\\
console.log(users.sort((a, b) => a.age.localeCompare(b.age)));

////////////////////3\\

const letters = ["a", "b", "c", "d"];
const numbers = [1, 2, 3, 4, 5, 6, 7];

// console.log();

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(letters);
console.log(letters);

///////////////////4\\

const arr4 = [
  {
    product: "Lenova",
    price: 1900,
  },
  {
    product: "HP",
    price: 1300,
  },
  {
    product: "Acer",
    price: 1600,
  },
];

// let result = arr4.reduce((sum, prev) => (sum += prev.price), 0) / 2;
// console.log(result);

let newArr = [];
function devicePrice(arr) {
  return arr.filter((el) => (el.price = el.price / 2));
}
console.log(devicePrice(arr4));

/////////////////////5\\

let num1 = 246; //246642
let num2 = 102; //102201
let num3 = 152; //152251

// console.log(
//   `${num1.toString().split("").join("")}${num1
//     .toString()
//     .split("")
//     .reverse()
//     .join("")}`
// );

// console.log(
//   String(num1).split("").join("") + String(num1).split("").reverse().join("")
// );
// console.log(
//   String(num2).split("").join("") + String(num2).split("").reverse().join("")
// );
// console.log(
//   String(num3).split("").join("") + String(num3).split("").reverse().join("")
// );

function reverseNum(arr) {
  return (
    String(arr).split("").join("") + String(arr).split("").reverse().join("")
  );
}
console.log(reverseNum(num1));
console.log(reverseNum(num2));
console.log(reverseNum(num3));
