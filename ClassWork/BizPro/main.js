let cards = document.querySelector(".cards");
let searchBtn = document.querySelector(".searchBtn");
let sortBtn = document.querySelector(".sortBtn");

let BASE_URL = " http://localhost:8080/developments";
let filtered = [];
let allData = [];

async function getAllData() {
  let res = await axios(BASE_URL);
  let data = res.data;
  allData = data;
  filtered = (filtered.length || sortBtn.value)? filtered : data;
  cards.innerHTML = "";
  filtered.forEach((el) => {
    cards.innerHTML += `
            <div class="col-lg-3 col-md-6 col-sm-12 b-card">
              <img src="./assets/images/${el.image}" alt="user" width="100" />
              <h4>${el.title}</h4>
              <p class="text-center">
                ${el.text}
              </p>
              <p class="text-center">${el.price} $</p>
              <div class="buttons">
                <a href="details.html?id=${el.id}" class="btn btn-danger details my-1">More Details</a>
                <button class="btn btn-danger delete my-1" onclick=deleteFunc(${el.id})>Delete</button>
                <a href="add-edit.html?id=${el.id}" class="btn btn-success edit my-1">Edit</a>
                <a class="btn btn-primary fav my-1" onclick=favFunc(${el.id})>Add Favorites</a>
              </div>
            </div>
        `;
  })
}
getAllData();

async function deleteFunc(id) {
  await axios.delete(`${BASE_URL}/${id}`);
  filtered=filtered.filter((item)=> item.id!=id)
  getAllData()
}

let bool=true
sortBtn.addEventListener("click", function(){
    if(bool){
        filtered.sort((a,b)=>a.price -b.price)
        bool=false
        getAllData()
    }else{
        filtered.sort((a,b)=> b.price-a.price)
        bool=true
        getAllData()
    }
})

searchBtn.addEventListener("input", function(e){
    filtered=allData.filter((item)=>{
        return item.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    })
    getAllData()
})

let favData= JSON.parse(localStorage.getItem("favData")) || []

async function favFunc(id){
  let res = await axios(`${BASE_URL}/${id}`);
  let data= res.data

  let available=favData.find((item)=> item.id==id)
  if(!available){
    favData.push(data)
    localStorage.setItem("favData", JSON.stringify(favData))
  }else{
    alert("hehehe")
  }
}