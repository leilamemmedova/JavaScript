let news = document.querySelector(".news");
let sortBtn = document.querySelector(".sortbtn");
let search = document.querySelector(".search-name");

let filtered = [];
allData = [];
let BASE_URL = "http://localhost:8080/professional";

async function getAllData() {
  news.innerHTML = "";
  let res = await axios(BASE_URL);
  let data = await res.data;
  console.log(data);
  filtered = filtered.length || search.value ? filtered : data;
  allData = data;
  filtered.forEach((item) => {
    news.innerHTML += `
             <div class="col-lg-4 col-md-6 col-sm-12 my-3">
              <div class="card" >
                <img class="card-img-top" src="${item.image}" alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">${item.name}</h5>
                  <p class="card-text">${item.text}</p>
                  <p class="price">${item.price}</p>
                  <div class="delete-add">
                  <a class="btn btn-danger" onclick=deleteFunc(${item.id})>Delete</a>
                  <a class="btn btn-primary" onclick=getFavData(${item.id})>Add Fav</a>
                  <a href="addnews.html?id=${item.id}" class="btn btn-success">EDİT</a>
                  </div>
                </div>
              </div>
            </div>
        `;
  });
}
getAllData();

async function deleteFunc(id) {
  await axios.delete(`${BASE_URL}/${id}`);
  filtered = allData.filter((item) => item.id != id);
  getAllData();
}

search.addEventListener("input", async function (e) {
  let res = await axios(BASE_URL);
  let data = await res.data;
  filtered = data.filter((item) =>
    item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  console.log(filtered);
  getAllData();
});

let sorted;
let bool = true;
sortBtn.addEventListener("click", async function () {
  if (bool) {
   filtered= allData.sort((a, b) => a.price - b.price);
   bool=false
    getAllData();
  } else {
    filtered = allData.sort((a, b) => b.price - a.price);
    bool=true
    getAllData();
  }
});

let favData= JSON.parse(localStorage.getItem("favData")) || []

async function getFavData(id){
  console.log("hi");
  let res=await axios(`${BASE_URL}/${id}`)
  let data=await res.data
  let available=favData.find((item)=> item.id==data.id)
  if(!available){
    favData.push(data)
    localStorage.setItem("favData", JSON.stringify(favData))
  }else{
    alert("this have")
  }
}
