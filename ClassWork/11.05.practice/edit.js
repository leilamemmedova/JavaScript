let id = new URLSearchParams(window.location.search).get("id");

let update = document.querySelector(".update-edit");
let editForm = document.querySelector(".update");
let blogTitle = document.querySelector("#blog-title");
let blogBody = document.querySelector("#blog-body");
let blogAuthor = document.querySelector("#blog-author");
let editBtn = document.querySelector(".edit-blog");

axios(`https://northwind.vercel.app/api/suppliers/${id}`).then((res) => {
  blogTitle.value = res.data.companyName;
  blogBody.value = res.data.contactTitle;
  blogAuthor.value = res.data.contactName;
});

editForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let obj = {
    companyName: blogTitle.value,
    contactTitle: blogBody.value,
    contactName: blogAuthor.value,
  };
  axios
    .patch(`https://northwind.vercel.app/api/suppliers/${id}`, obj)
    .then(() => {
      window.location = "home.html";
    });
});
