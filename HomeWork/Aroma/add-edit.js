let id= new URLSearchParams(window.location.search).get("id")

let form= document.querySelector("form")
let productName= document.querySelector("#name")
let price= document.querySelector("#price")
let category= document.querySelector("#category")
let photo= document.querySelector("#photo")

let BASE_URL = "http://localhost:8080/products";

if(id){
    async function editFunc(id){
        let res= await axios(`${BASE_URL}/${id}`)
        let data= res.data
        productName.value=data.name
        price.value=data.price
        category.value=data.category
    }
    editFunc(id)
}

form.addEventListener("submit", async function(e){
    e.preventDefault()
    let obj={
        name: productName.value,
        price: price.value,
        category: category.value,
        image: photo.value.split("\\")[2]
    }
    if(id){
        await axios.patch(`${BASE_URL}/${id}`,obj);
    }else{
        await axios.post(BASE_URL, obj)
    }
    window.location="index.html"
})