const arr1=[1,2,3,4,5,6,7]
function findNumber(arr){
    arr.sort((a,b)=> a-b);{
        if(arr.length%2!==0){
            return arr[Math.floor[arr.length/2]]
        }else(arr.length%2==0);{
            return arr[(arr.length/2)-1]
        }
    }
}
console.log((findNumber(arr1)))