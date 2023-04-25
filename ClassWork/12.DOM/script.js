let header = document.createElement("header");
let nav = document.createElement("nav");
let ul = document.createElement("ul");
let liHome = document.createElement("li");
let liAbout = document.createElement("li");
let liBlog = document.createElement("li");
let liContact = document.createElement("li");
let secHome = document.createElement("section");
let secAbout = document.createElement("section");
let secBlog = document.createElement("section");
let secContact = document.createElement("section");


document.body.append(header)
header.append(nav)
nav.append(ul)
ul.append(liHome)
ul.append(liAbout)
ul.append(liBlog)
ul.append(liContact)
document.body.append(secHome)
document.body.append(secAbout)
document.body.append(secBlog)
document.body.append(secContact)

//////////HEADER

ul.style.height="10vh"
ul.style.display="flex"
ul.style.justifyContent="space-around"
ul.style.alignItems="center"
ul.style.backgroundColor="#000"

liHome.style.listStyle="none"
liHome.style.color="#fff"
liHome.innerHTML="<strong>Home<strong>"
liHome.addEventListener("click",function(){
    window.scrollTo(0,secHome.offsetTop)
})
liHome.style.cursor="pointer"


liAbout.style.listStyle="none"
liAbout.style.color="#fff"
liAbout.innerHTML="<strong>About<strong>"
liAbout.addEventListener("click",function(){
    window.scrollTo(0,secAbout.offsetTop)
})
liAbout.style.cursor="pointer"


liBlog.style.listStyle="none"
liBlog.style.color="#fff"
liBlog.innerHTML="<strong>Blog<strong>"
liBlog.addEventListener("click",function(){
    window.scrollTo(0,secBlog.offsetTop)
})
liBlog.style.cursor="pointer"


liContact.style.listStyle="none"
liContact.style.color="#fff"
liContact.innerHTML="<strong>Contact<strong>"
liContact.addEventListener("click",function(){
    window.scrollTo(0,secContact.offsetTop)
})
liContact.style.cursor="pointer"


//////////SECTION

secHome.style.height= "100vh"
secHome.style.display= "flex"
secHome.style.alignItems= "center"
secHome.style.justifyContent= "center"
secHome.style.fontSize= "20px"
secHome.style.fontWeight= "bolder"
secHome.style.border= "1px dashed #000"
secHome.innerHTML="<strong>Home<strong>"
secHome.id="home"


secAbout.style.height= "100vh"
secAbout.style.display= "flex"
secAbout.style.alignItems= "center"
secAbout.style.justifyContent= "center"
secAbout.style.fontSize= "20px"
secAbout.style.fontWeight= "bolder"
secAbout.style.border= "1px dashed #000"
secAbout.innerHTML="<strong>About<strong>"
secHome.id="about"

secBlog.style.height= "100vh"
secBlog.style.display= "flex"
secBlog.style.alignItems= "center"
secBlog.style.justifyContent= "center"
secBlog.style.fontSize= "20px"
secBlog.style.fontWeight= "bolder"
secBlog.style.border= "1px dashed #000"
secBlog.innerHTML="<strong>Blog<strong>"
secHome.id="blog"

secContact.style.height= "100vh"
secContact.style.display= "flex"
secContact.style.alignItems= "center"
secContact.style.justifyContent= "center"
secContact.style.fontSize= "20px"
secContact.style.fontWeight= "bolder"
secContact.style.border= "1px dashed #000"
secContact.innerHTML="<strong>Contact<strong>"
secHome.id="contact"




////////////others

///ANOGRAM
// function isAnogram(str1,str2){
//     return cleanString(str1) === cleanString(str2)
// }
// function cleanString(str){
//     return str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
// }

// function isAnogram(str1,str2){
//     return (
//         str1.toLowerCase().split('').sort((a,b)=>a.localCompare(b)).join('')==str2.toLowerCase().split('').sort((a,b)=> a.localCompare(b))
//         )
//     }
    // console.log(isAnogram("Sevil", "EvilS"))
    // console.log(isAnogram('Maqa', 'qaqam'))

///2
 function maxChar(str){
    let max=0;
    let commonLetter=""
    str.toLocaleLowerCase().split("").forEach((letter)=>{
        if(str.toLocaleLowerCase().split(letter).length-1>max){
            max=str.toLocaleLowerCase().split(letter).length-1
            commonLetter=letter
        }
    })
    return commonLetter
}
console.log(maxChar('Tlftfaft'))
console.log(maxChar('Gence'));