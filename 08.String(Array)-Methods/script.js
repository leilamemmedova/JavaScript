///////////////////////////1\\

const arr1 = ["guba", "mingecevir", "baku", "gazag", "gence", "shirvan"];

let newArr1= arr1.map((item)=> item[0].toLocaleUpperCase() + item.slice(1,-1) +item[item.length-1].toLocaleUpperCase())
console.log(newArr1)

/////////////////////////////2\\

let text = "We are MERN-Stack developers";
//1\\
let newText=text.replaceAll('MERN-Stack', 'Front-end')
console.log(newText)

//2\\
let newText2=text.toLocaleLowerCase().replaceAll('e' ,'a')
console.log(newText2)

//3\\
let newText3= text.concat(" in Microsoft")
console.log(newText3)

//4\\
let newText4=[]
text.split("").map((el,index)=> el.toLocaleLowerCase()==="r" ?newText4.push(index) :newText4)
console.log(newText4)

//5\\
let newArr=[]
newArr.push(text.toLocaleLowerCase().indexOf("r" ,6))
console.log(newArr)

//6\\
let vowels = ["a", "i", "o", "u", "e"];
let newText5 = [];
text.split("").forEach((el) => vowels.includes(el) && newText5.push(el));
console.log(newText5.filter((el, index) => newText5.indexOf(el) === index));


/////////////////////////////3\\

const arr3 = [
  {
    region: "Yasamal",
    area: 170,
  },

  {
    region: "Nizami",
    area: 20,
  },

  {
    region: "Nesimi",
    area: 10,
  },

  {
    region: "Sebail",
    area: 30,
  },
  {
    region: "Xetai",
    area: 30,
  },
];
let sum = 0;
let calcArea = arr3.map((el) =>
  el.region.length === 6 ? (sum += el.area) : null
);
console.log(sum);

///////////////////////////4\\

const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6];
console.log(arr4.sort((a, b) => a - b));

//////////////////////////5\\

const arr5 = [5, [8], [9, ["hi", ["don't touch me"], [0]], "9"]];
console.log(arr5.flat(Infinity));

////////////////////////////6\\

const colors = [
  "green",
  "blue",
  "yellow",
  "black",
  "red",
  "brown",
  "white",
  "gray",
  "violet",
  "pink",
];
let newColors= colors.sort((a,b) => a.length > b.length ?1 :-1)
newColors.sort((a,b) => a.length == b.length ?a.localeCompare(b) :null)
console.log(newColors)
