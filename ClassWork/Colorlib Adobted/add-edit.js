let id= new URLSearchParams(window.location.search).get("id")

let name= document.querySelector("#name")
let age= document.querySelector("#age")
let form= document.querySelector("form")
let photo= document.querySelector("#photo")

let BASE_URL = "http://localhost:8080/people";

console.log(id);
if(id){
    async function editFunc(id){
    let res= await axios(`${BASE_URL}/${id}`)
    let data= await res.data
    name.value= data.name
    age.value=data.age
}
editFunc(id)
}

form.addEventListener("submit", async function(e){
    e.preventDefault()
    let obj={
        name:name.value,
        age:age.value
    }
    if(id){
        axios.patch(`${BASE_URL}/${id}`,obj);
    }else{
        axios.post(BASE_URL, obj)
    }
    window.location="index.html"
})