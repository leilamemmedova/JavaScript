let id= new URLSearchParams(window.location.search).get("id") 

let firstName= document.querySelector("#firstname")
let lastName= document.querySelector("#lastname")
let email= document.querySelector("#email")
let photo= document.querySelector("#photo")
let addForm= document.querySelector("#add-edit-form")
let submitBtn= document.querySelector(".addbtn")

let BASE_URL = "http://localhost:8080/users";
console.log(id);

if(id){
    async function editFunc(id){
        let res= await axios(`${BASE_URL}/${id}`)
        let data= await res.data
        firstName.value= data.name
        lastName.value= data.surname
        email.value=data.email
    } 
    editFunc()
}
addForm.addEventListener("submit",async function(){
    let obj={
        firstName: name.value,
        lastName: surname.value,
        email: email.value,
        photo: `./image/${photo.value.split("\\")[2]}`
    }
    if(id){
        await axios.patch(`${BASE_URL}/${id}`,obj);
    }else{
        await axios.post(BASE_URL, obj)
    }
})

