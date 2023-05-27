let id = new URLSearchParams(window.location.search).get("id");
let card = document.querySelector(".card-div");

let BASE_URL = "http://localhost:8080/exercises";
console.log(id);


async function getDetails(id) {
  let res = await axios(`${BASE_URL}/${id}`);
  let data = await res.data;
  card.innerHTML = `
        <img src="./assets/images/${data.images}" alt="" />
          <h4 class="text-center">${data.name}</h4>
          <p class="text-center">
            ${data.description}
          </p>
          <p class="text-center">${data.price}</p>
    `;
}
getDetails();
