let id = new URLSearchParams(window.location.search).get("id");

let BASE_URL = "http://localhost:8080/exercises";

let card = document.querySelector(".card-div");

console.log(id);


async function getDetails(id) {
  let res = await axios(`${BASE_URL}/${id}`);
  let data = await res.data;
  console.log(data);
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
