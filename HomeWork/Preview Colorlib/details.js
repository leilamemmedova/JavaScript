let id = new URLSearchParams(window.location.search).get("id");

let BASE_URL = "http://localhost:8080/exercises";

let card = document.querySelector(".card-div");

console.log(id);


async function getDetails(id) {
  let res = await axios(`${BASE_URL}/${id}`);
  let data = await res.data;
  console.log(data);
  card.innerHTML = `
        <img src="/assets/images/${data.image}" alt="" />
          <h4 class="text-center my-3">${data.name}</h4>
          <p class="text-center my-3">
            ${data.description}
          </p>
          <p class="text-center my-3">${data.price}</p>
    `;
}
getDetails(id);
