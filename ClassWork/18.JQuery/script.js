// //1\\

// const colors = ["red", "green", "blue", "yellow", "orange", "brown"];
// $(".change-color").click(function () {
//   $("#h1").css({ color: colors[Math.floor(Math.random() * colors.length)] });
// });

// //2\\

// $(".hide").click(function () {
//   $("#h1").hide();
// });
// $(".show").click(function () {
//   $("#h1").show();
// });

// //3\\

// $.each(colors, function (index, value) {
//   console.log(value);
// });

// //4\\
// const numbers = [4, 2, false, null, "false", NaN, undefined, 8, true, "9"];
// // console.log(numbers.reduce((sum, el, index) => (el ? sum + index : sum), 0));

// let sum = 0;
// $.map(numbers, function (value, index) {
//   if (value) {
//     sum += index;
//   }
// });
// console.log(sum);



/////////ALGORITHM\\\\\\\
function capitalizeFirst(str){
   return str.toLocaleLowerCase().split(" ").map((el)=> el[0].toUpperCase("")+el.slice(1)).join(" ")
}
console.log(capitalizeFirst("This is title"));
