let id = new URLSearchParams(window.location.search).get("id");

let form = document.querySelector(".edit-form");
let firstName = document.querySelector(".firstname");
let email = document.querySelector(".email");
let editBtn= document.querySelector(".edit")

let BASE_URL = `https://northwind.vercel.app/api/suppliers`;
axios(BASE_URL).then(s) => getAllUsers(response.data);

axios(`${BASE_URL}/${id}`).then((res)=>{
    firstName.value=res.data.companyName
    email.value=res.data.contactTitle

form.addEventListener("submit", function(event){
    event.preventDefault()
    let obj = {
      companyName: firstName.value,
      contactTitle: email.value
    };
    axios.patch(`${BASE_URL}/${id}`,obj)
    window.location="index.html"
})
});


