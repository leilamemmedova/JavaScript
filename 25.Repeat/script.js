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
  filtered.forEach(item => {
    tBody.innerHTML += `
           <tr>
                <td>1</td>
                <td><img src="./image/ego.jpg" alt="" /></td>
                <td>${item.name}</td>
                <td>${item.surname}</td>
                <td>${item.email}</td>
                <td>${item.date}</td>
                <td>
                  <a href="adduser.html?id=${item.id}" class="btn btn-success edit">Edit</a>
                  <button class="btn btn-danger delete" onclick=deleteFunc(${item.id})>Delete</button>
                  <a href="" class="btn btn-primary">Add Fav</a>
                </td>
            </tr>      
    `;
  });
}
getAllData()

async function deleteFunc(id){
  await axios.delete(`${BASE_URL}/${id}`)
  filtered=allData.filter((item)=> item.id!=id)
  getAllData()
}





