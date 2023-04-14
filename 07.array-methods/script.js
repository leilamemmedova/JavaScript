//////////////////1.Splice method:
const arr1 = ["a", "b", "c", "d", "e"];

//1\\
// arr1.splice(1,1)
// console.log(arr1)

//2\\
// arr1.splice(2,2)
// console.log(arr1)

//3\\
// arr1.splice(arr1.length-1,1)
// console.log(arr1)

//4\\
// arr1.splice(arr1.length-3)
// console.log(arr1)

//5\\
// arr1.splice(3,0, '3','4')
// console.log(arr1)

//6\\
// arr1.splice(0,2 ,"A" ,"B")
// console.log(arr1)

////////////////////2.Slice method
const arr2 = ["user1", "user2", "user3", 11, 3, 5];

//1\\
// let newArr=arr2.slice()
// console.log(newArr)

//2\\
// let newArr=arr2.slice(1,4)
// console.log(newArr)

//3\\
// let newArr=arr2.slice(2)
// console.log(newArr)

////////////////////3.Concat method
const arr3 = [1, 2, 3];
const arr33 = [4, 5, 6];

//1\\
// let newArr =arr3.concat(arr33)
// console.log(newArr)

//2\\
// let newArr =arr3.concat('a','b')
// console.log(newArr)

/////////////////////4.forEach method
const arr4 = ["name", "surname", 10, "age", "city", "uni", 80, 20];

//1\\
// arr4.forEach((item) => console.log(item))

//2\\
// arr4.forEach(item=> {
//      typeof item=="number"
//      console.log(item *2)
// })

/////////////////////5.Map method
const arr5 =[4,5,6,'2', 6, true, undefined, '55']

//1\\
// const newArray= arr5.map((item)=>console.log(item) )

//2\\
// const newArray= arr5.map((item)=>{
//     if(typeof item=='number'){
//        return item*5
//     }else{
//         return item
//     }
// }
// )
// console.log(newArray)

//3\\
// const newArray= arr5.map((item)=> console.log(String(item)) )

//4\\
// const newArray= arr5.map((item)=> console.log(Boolean(item)) )

//5\\
const newArray= arr5.map((item)=> console.log(Number(item)) )
