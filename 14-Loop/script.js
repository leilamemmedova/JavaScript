//1.Convert Age to Days

function calcAge(age) {
  let oneYear = 365;
  return age * oneYear;
}
console.log(calcAge(65));
console.log(calcAge(0));
console.log(calcAge(20));

// 1.Loop text

let work = "Front-end Developer";
for (i = 1; i <= work.length; i++) {

  console.log(work.slice(0,i));
}

//5.Sum numbers between 17 and 30.

let k=0
for(i=17 ; i<=30; i++){
  if(i===19 || i===20 ){
    continue;
  }
   k+=i
  }
  console.log(k)

//3.Sum of even numbers in 10

let u=0
for(m=2 ; m<11 ;m++){
  if(m==10){
    continue;
  }
  u+=m
}
console.log(u)

//4.Multiply the odd numbers

let mul = 1;
for (z = 1; z <= 17; z++) {
  if (z == 17) {
    continue;
  }
  if (z % 2 != 0) {
    mul *= z;
  }
}
console.log(mul);

//4.Multiply numbers between 10 and 18

let num=1
for(i=10 ; i<19 ; i++) {
num*=i
}
console.log(num)

//6.Sum of even numbers and odd nnumbers

let i = 0;
let even = 0;
let odd = 0;
while (i <= 15) {
  if (i % 2 == 0) {
    even += i;
  }
  if (i % 2 == 1) {
    odd += i;
  }
  i++;
}
console.log(even);
console.log(odd);

//7.Find of even numbers in 16. And every number to the power of 2.

for (i = 1; i <= 16; i++) {
  if (i % 2 == 0) {
  }
}
console.log(i ** 2);
