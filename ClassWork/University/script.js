let tBody = document.querySelector("tbody");
let tr = document.querySelector("tr");
let search = document.querySelector("#search");
let loading=document.querySelector(".loading")

axios("http://universities.hipolabs.com/search?country=azerbaijan").then(
  (res) => drawTable(res.data)
);

window.addEventListener("load", function(){
    loading.style.display="flex"
})

function drawTable(arr) {
    console.log(arr);
    tBody.innerHTML=""
    loading.style.display="flex"
  arr.forEach((elem) => {
    tBody.innerHTML += `
        <tr>
            <td>${elem.name}</td>
            <td>${elem.country}</td>
            <td>${elem.domains}</td>
            <td><a href="${elem.web_pages[0]} ${elem.domains[0]}">${elem.web_pages[0]}</a></td>
        </tr>
        `;
        loading.style.display="none"
  });
}

search.addEventListener("input", function (event) {
    loading.style.display="flex"
  axios(`http://universities.hipolabs.com/search?country=azerbaijan&name=${event.target.value}`).then(
    (res) =>{
        drawTable(res.data)
        loading.style.display="none"
    })
});
