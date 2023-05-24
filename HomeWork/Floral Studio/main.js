let cards = document.querySelector(".cards");
let searchBtn=document.querySelector(".searchBtn")
let sortBtn=document.querySelector(".sortBtn")


let BASE_URL = "http://localhost:8080/flowers";

let filtered = [];
let allData = [];

async function getAllData() {
  let res = await axios(BASE_URL);
  let data = res.data;
  filtered = filtered.length ? filtered : data;
  allData = data;
  cards.innerHTML = "";
  filtered.forEach((item) => {
    cards.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12 fl-card">
            <img src="${item.image}" alt="">
            <h5>${item.name}</h5>
            <h4>${item.price} $</h4>
            <div class="buttons">
              <a href="add-edit.html?id=${item.id}" class="btn btn-success edit" >Edit</a>
              <button class="btn btn-danger delete" onclick=deleteFunc(${item.id})>Delete</button>
              <a class="btn btn-primary add" onclick=addFav(${item.id})>Add Fav</a>
            </div> 
        </div>
    `;
  });
}
getAllData();


async function deleteFunc(id){
 await axios.delete(`${BASE_URL}/${id}`)
 filtered=allData.filter((item)=>item.id!=id)
 getAllData()
}

searchBtn.addEventListener("input", async function(e){
  filtered=allData.filter((item)=>{
   return item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  })
  getAllData()
})

let bool=true
sortBtn.addEventListener("click", async function(){
  if(bool){
    filtered.sort((a,b)=>a.price-b.price)
    bool=false
    getAllData()
  }else{
    filtered.sort((a, b) => b.price - a.price);
    bool = true;
    getAllData();
  }
})

let favData=JSON.parse(localStorage.getItem("favData")) || []

async function addFav(id){
  let res= await axios(`${BASE_URL}/${id}`)
  let data=res.data
  let available=favData.find((item)=> item.id==id)
  if(!available){
    favData.push(data)
    localStorage.setItem("favData", JSON.stringify(favData))
  }else{
    alert("hehe")
  }
}

