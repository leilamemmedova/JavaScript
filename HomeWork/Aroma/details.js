let id = new URLSearchParams(window.location.search).get("id");

let row = document.querySelector(".row");
let BASE_URL = "http://localhost:8080/products";

async function getDetails() {
  let res = await axios(`${BASE_URL}/${id}`);
  let data = await res.data;
  console.log(data);
  row.innerHTML = `
           <div class="product-card d-flex align-items-center justify-content-center w-50">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <img class="w-100" src="./assets/images/${data.image}" alt="" />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <h3 class="text-center">category: ${data.category}</h3>
              <h2 class="text-center">${data.name}</h2>
              <h3 class="text-center text-primary">$ ${data.price}</h3>
            </div>
          </div> 
        `;
}
getDetails();
