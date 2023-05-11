let homePage=document.querySelector(".home-page")
let newPage=document.querySelector(".new-page")
let deleteBtn=document.querySelector(".delete")
let cards=document.querySelector(".cards")
let editBtn=document.querySelector(".edit")
let search =document.querySelector("#search")

let BASE_URL="https://northwind.vercel.app/api/suppliers"

axios(BASE_URL).then((res)=>drawCards(res.data))

function drawCards(arr){
    // cards.innerHTML=''
    arr.forEach(elem => {
         cards.innerHTML+=    
        `
             <span class="card w-75">
                <div class="card-body">
                  <h5 class="card-title">${elem.companyName}</h5>
                  <p class="card-text">${elem.contactTitle.slice(0,200)}...<a class="read-more" href="details.html?id=${elem.id}">Read More</a></p>
                  <p>written by ${elem.contactName}</p>
                  <button href="#" class="btn btn-danger delete" onclick=deleteCard(${elem.id},this)>Delete</button>
                  <a href="edit.html?id=${elem.id}" class="btn btn-success edit">edit</a>
                </div>
              </span>
          `
    });
}


search.addEventListener("input", function(e){
    axios(BASE_URL).then((res)=>{
       let filtered= res.data.filter((item)=> {
            item.companyName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
        })
        drawCards(filtered)
    })
    console.log('jj');
});

// axios(BASE_URL).then(res=>console.log(res.data))

newPage.addEventListener("click", function(){
    window.location="newblog.html"
})

homePage.addEventListener("click", function(){
    window.location="home.html"
})

function deleteCard(id,btn){
   axios.delete(`${BASE_URL}/${id}`)
   btn.closest("span").remove()
}

function editCard(id){
    window.location="edit.html"
}
