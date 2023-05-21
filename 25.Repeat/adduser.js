let id= new URLSearchParams(window.location.search).get("id") 

let firstName= document.querySelector("#firstname")
let lastName= document.querySelector("#lastname")
let email= document.querySelector("#email")
let photo= document.querySelector("#photo")
let addForm= document.querySelector("form")
let submitBtn= document.querySelector(".addbtn")

let BASE_URL = "http://localhost:8080/users";
// console.log(id);
// console.log('hh');

if(id){
    async function editFunc(){
        let res= await axios(`${BASE_URL}/${id}`)
        let data= await res.data
        firstName.value= data.name
        lastName.value= data.surname
        email.value=data.email
    } 
    editFunc()
}

addForm.addEventListener("submit",async function(e){
    e.preventDefault()
    console.log("hi");
    let obj={   
        name: firstName.value,
        surname: lastName.value,
        email: email.value,
        // photo: `./image/${photo.value.split("\\")[1]}`,
        date: new Date()
    }
    if(id){
        await axios.patch(`${BASE_URL}/${id}`,obj);
    }else{
        await axios.post(BASE_URL,obj)
    }
    window.location="index.html"
})
