let url = "https://northwind.vercel.app/api/suppliers";

let tdBody = document.querySelector("tbody");

function deleteBtn(id){
    console.log(id)
    fetch(`${url}/${id}`, {
        method: "DELETE"
    })
    companyFunction()
}
deleteBtn()

function companyFunction() {
  fetch(url)
    .then((result) => result.json())
    .then((data) => {
        tdBody.innerHTML=""
      data.forEach((item) => {
        let trE = document.createElement("tr");
        trE.innerHTML += `
        <td>${item.id}</td>
        <td>${item.companyName}</td>
        <td>${item.address?.city}</td>
        <td>${item.address?.country}</td>
        <td>${item.address?.phone}</td>
        <td><btn class="delete" onclick=deleteBtn(${item.id})>Delete</btn></td>
        `;
        tdBody.append(trE);
      });
    });
}
companyFunction();
