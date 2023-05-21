let tBody = document.querySelector("tbody");

let filtered=[]
let allData=[]
let BASE_URL = "http://localhost:8080/users";

async function getAllData(){
  let res= await axios(BASE_URL)
  let data= await res.data
  allData=data
  filtered=filtered.length ?filtered :data
  tBody.innerHTML=""
  filtered.forEach(item => 
    tBody.innerHTML += `
           <tr>
                <td>${item.id}</td>
                <td><img src="./image/alfredo.jpg" alt="" /></td>
                <td>${item.name}</td>
                <td>${item.surname}</td>
                <td>${item.email}</td>
                <td>${item.date}</td>
                <td>
                  <a href="adduser.html?id=${item.id}" class="btn btn-success edit">Edit</a>
                  <button class="btn btn-danger delete" onclick=deleteFunc(${item.id})>Delete</button>
                  <a class="btn btn-primary" onclick=favFunc(${item.id})>Add Fav</a>
                </td>
            </tr>      
    `
  );
}
getAllData()

async function deleteFunc(id){
  await axios.delete(`${BASE_URL}/${id}`)
  filtered=allData.filter((item)=> item.id!=id)
  getAllData()
}
const favData= JSON.parse(localStorage.getItem("favData")) || []

async function favFunc(id){
  let res= await axios(`${BASE_URL}/${id}`)
  let data= await res.data
  
 let available= favData.find((item)=> item.id==data.id)
    if(!available){
      favData.push(data)
      localStorage.setItem("favData", JSON.stringify(favData))
    }else{
      alert("hahaha")
    }

}




