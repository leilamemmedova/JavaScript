let id= new URLSearchParams(window.location.search).get("id")

let body=document.querySelector(".body")
let title=document.querySelector(".title")
let text=document.querySelector(".text")
console.log(id)
fetch(`https://northwind.vercel.app/api/suppliers/${id}`).then((res)=>res.json()).then((data)=>{
    body.innerHTML=data.companyName
    title.innerHTML= data.contactTitle
    text.innerHTML= data.contactName
    console.log(data)
})


