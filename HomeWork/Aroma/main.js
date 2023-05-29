let products = document.querySelector(".products");
let loadMore = document.querySelector(".load-more");
let sortBtn = document.querySelector(".sort");
let searchBtn = document.querySelector(".search");
let menuBtn= document.querySelector(".menuBtn")
let burgerMenu= document.querySelector(".burger-menu")
let removeMenu= document.querySelector("#modal-remove")

let BASE_URL = "http://localhost:8080/products";
let filtered = [];
let defaultArr = [];
let allData = [];
let copyArr = [];
let num = 4;

async function getAllData() {
  let res = await axios(BASE_URL);
  let data = res.data;
  filtered =
    filtered.length || searchBtn.value
      ? filtered.slice(0, num)
      : data.slice(0, num);
  allData = data;
  products.innerHTML = "";
  filtered.forEach((item) => {
    products.innerHTML += `
            <div class="col-lg-3 col-md-6 col-sm-12 product">
              <div class="product-img">
                <img src="./assets/images/${item.image}" alt="" />
                <div class="buttons">
                  <a href="add-edit.html?id=${item.id}"><i class="fa-solid fa-pencil edit" style="color: white"></i></a>
                  <i class="fa-solid fa-trash-can delete" onclick=deleteFunc(${item.id}) style="color: white"></i>
                  <i class="fa-regular fa-heart fav" onclick=favFunc(${item.id}) style="color: white"></i>
                </div>
              </div>
              <div class="product-detail">
                <p class="text-center category">${item.category}</p>
                <h5 class="text-center">
                  <a href="details.html?id=${item.id}" class="name">${item.name}</a>
                </h5>
                <h5 class="text-center price">$ ${item.price}</h5>
              </div>
            </div>
        `;
  });
}
getAllData();

async function deleteFunc(id) {
  await axios.delete(`${BASE_URL}/${id}`);
  //   filtered.filter((item) => item.id != id);
  getAllData();
}

loadMore.addEventListener("click", function () {
  num = num + 4;
  filtered = copyArr;
  getAllData();
});

searchBtn.addEventListener("input", function (e) {
  filtered = allData.filter((item) =>
    item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  getAllData();
});

let bool=true
sortBtn.addEventListener("click", function(){
    if(bool){
        filtered.sort((a,b)=> a.price.localeCompare(b.price))
        bool=false
        getAllData()
    }else{
        filtered.sort((a, b) => b.price.localeCompare(a.price));
        bool=true
        getAllData()
    }
})

// sortBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (sortBtn.value == "Ascending") {
//     sortBtn.innerHTML = "Descending";
//     filtered.sort((a, b) => a.price.localeCompare(b.price));
//     getAllData();
//   } else if (sortBtn.value == "Descending") {
//     sortBtn.innerHTML = "Default";
//     filtered.sort((a, b) => b.price.localeCompare(a.price));
//     getAllData();
//   } else {
//     sortBtn.innerHTML = "Ascending";
//     filtered = defaultArr;
//     getAllData();
//   }
// });


let favData= JSON.parse(localStorage.getItem("favData"))

async function favFunc(id){
    let res= await axios(`${BASE_URL}/${id}`)
    let data= await res.data
    let available= favData.find((item)=> item.id==id)
    if(!available){
        favData.push(data)
        localStorage.setItem("favData", JSON.stringify(favData))
    }else{
        alert("Product already exists in favorite list!");
    }
}

menuBtn.addEventListener("click", function(){
  burgerMenu.style.display="block"
})
removeMenu.addEventListener("click", function(){
  burgerMenu.style.display="none"
})