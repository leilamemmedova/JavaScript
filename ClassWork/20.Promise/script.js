let url='https://jsonplaceholder.typicode.com/todos'
function users(){
    fetch(url)
          .then(result => result.json())
          .then(data => console.log(data))
}
users()

function usersCompletedFiltered(){
    fetch(url)
          .then(result => result.json())
          .then(data => {
            let filtered=data.filter((item)=> item.completed)
            console.log(filtered);
          })
}
usersCompletedFiltered()

function usersIdFiltered(){
    fetch(url)
          .then(result => result.json())
          .then(data => {
            let idFiltered=data.filter((item)=> item.userId==2)
            console.log(idFiltered);
          }
           
            )
}
usersIdFiltered()
