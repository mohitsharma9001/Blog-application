import navbar from  "../component/navbar.js"
let navDiv = document.getElementById("navber");

navDiv.innerHTML = navbar();
let blogId = JSON.parse(localStorage.getItem("blogId")) || [];


const getData = async (blogId)=>{
try {
    let res = await fetch(`http://localhost:3004/blog/${blogId}`)
 
    let data = await res.json()
console.log(data)
    document.getElementById("author").value = data.author;
    document.getElementById("blog").value = data.body
} catch (error) {
    console.log(error)
}
};

getData(blogId)

document.getElementById("edit-blg-btn").addEventListener("click",async function(){
    try {
        let blogUpdatedData = {
            author : document.getElementById("author").value,
            body : document.getElementById("blog").value
        }
       
    let res = await fetch(`http://localhost:3004/blog/${blogId}`,{
        method : "put",
        body : JSON.stringify(blogUpdatedData),
        headers :{
      "content-type" : "application/json",
        }
    })
    location.href = "index.html";
    } catch (error) {
        console.log(error)
    }
    
    
    });