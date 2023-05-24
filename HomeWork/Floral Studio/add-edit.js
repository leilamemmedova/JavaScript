let id=new URLSearchParams(window.location.search).get("id")

let flowerName=document.querySelector("#name")
let price= document.querySelector("#price")
let form=document.querySelector("form")

let BASE_URL = "http://localhost:8080/flowers";
 
if(id){
    async function editFunc(id){
        let res= await axios(`${BASE_URL}/${id}`)
        let data= res.data
        flowerName.value=data.name
        price.value=data.price
    }
    editFunc(id)
}

form.addEventListener("submit" ,async function(e){
    e.preventDefault()
    let obj={
        name:flowerName.value,
        price:price.value
    }
    if(id){
        await axios.patch(`${BASE_URL}/${id}`,obj);
    }else{
        await axios.post(BASE_URL, obj)
    }
    window.location="index.html"
})