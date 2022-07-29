import navbar from  "../component/navbar.js"
let navDiv = document.getElementById("navber");

navDiv.innerHTML = navbar()

document.getElementById("create-blg-btn").addEventListener("click",async function(){
try {
    let blogData = {
        author : document.getElementById("author").value,
        body : document.getElementById("blog").value
    }
   
let res = await fetch(`http://localhost:3004/blog`,{
    method : "post",
    body : JSON.stringify(blogData),
    headers :{
  "content-type" : "application/json",
    }
})
location.href = "index.html";
} catch (error) {
    console.log(error)
}


});
