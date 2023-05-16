let cards = document.querySelector(".cards");
let row = document.querySelector(".row");
let link = document.querySelector("a");
let card = document.querySelector(".card");
let searchCountry = document.querySelector("#search-country");
let filterRegion = document.querySelector("#filter-region");

let BASE_URL = "https://restcountries.com/v2/all";
axios(BASE_URL).then((res) => drawCards(res.data));

function drawCards(arr) {
  row.innerHTML = "";
  arr.forEach((item) => {
    row.innerHTML += `
        <div class="col col-3">
        <a href="details.html?name=${item.name}">
          <div class="card" style="width: 15rem">
            <img src="${item.flags.svg}" alt="Card image cap" />
            <div class="card-body">
              <p class="country-name">${item.name}</p>
              <p class="population">Population:${item.population}</p>
              <p class="region">Region: ${item.region}</p>
              <p class="capital">Capital:${item.capital}</p>
            </div>
          </div>
        </a>
      </div>
        `;
  });
}

searchCountry.addEventListener("input", function (event) {
  axios(BASE_URL).then((res) => {
    let filteredCountry = res.data.filter((item) => {
      return `${item.name}`
        .toLocaleLowerCase()
        .includes(event.target.value.toLocaleLowerCase());
    });
    drawCards(filteredCountry);
  });
});

filterRegion.addEventListener("change", function (event) {
  axios(BASE_URL).then((res) => {
    let filterRegion = res.data.filter((item) => {
      return (
        `${item.region}`.toLocaleLowerCase() ==
        event.target.value.toLocaleLowerCase()
      );
    });
    drawCards(filterRegion);
  });
});
