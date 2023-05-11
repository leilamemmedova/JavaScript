let homePage = document.querySelector(".home-page");
let newPage = document.querySelector(".new-page");
let addNewBlog = document.querySelector(".add-new-blog");
let blogTitle = document.querySelector("#blog-title");
let blogBody = document.querySelector("#blog-body");
let blogAuthor = document.querySelector("#blog-author");
let userForm = document.querySelector(".user-form");
let addBtn = document.querySelector(".add-blog");

homePage.addEventListener("click", function () {
  window.location = "home.html";
});
newPage.addEventListener("click", function () {
  window.location = "newblog.html";
});

// let BASE_URL = "https://northwind.vercel.app/api/suppliers";
// axios(BASE_URL).then((res) => console.log(res.data));

axios("https://northwind.vercel.app/api/suppliers").then((res) =>
  console.log(res.data)
);

// function addBlog() {}

// function addCustomer(obj) {
//   axios.post("https://northwind.vercel.app/api/suppliers", obj);
// }

userForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let obj = {
    companyName: blogTitle.value,
    contactTitle: blogBody.value,
    contactName: blogAuthor.value,
  };
  axios.post("https://northwind.vercel.app/api/suppliers", obj).then(() => {
    window.location = "home.html";
  });
});
