let cards =document.querySelector(".cards")
let row=document.querySelector(".row")
let card =document.querySelector(".card")

let name= new URLSearchParams(window.location.search).get("name")

const BASE_URL="https://restcountries.com/v3.1/name"
axios(`${BASE_URL}/${name}`).then((res)=> {
    console.log(res.data);
    row.innerHTML=`
    <div class="col-md-4 ">
    <img src="${res.data[0].flags.svg}" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="country-name">Name: ${res.data[0].name.common}</h5>
      <p class="population">Population: ${res.data[0].population}</p>
      <p class="capital"><small class="text-body-secondary">Capital: ${res.data[0].capital}</small></p>
      <p class="region"><small class="text-body-secondary">Region: ${res.data[0].region}</small></p>
    </div>
  </div>
    `
}

)