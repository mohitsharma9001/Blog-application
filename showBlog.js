import navbar from  "../component/navbar.js"
let navDiv = document.getElementById("navber");

navDiv.innerHTML = navbar()

let blogId = JSON.parse(localStorage.getItem("blogId")) || [];

let getRoot = document.getElementById("root")

getdata(blogId)
async function getdata(){
    try {
        let res = await fetch(`http://localhost:3004/blog/${blogId}`)

        let data = await res.json()
        console.log(data)
        displayData(data,root)
    } catch (error) {
        console.log(error);
    }
}


const displayData = (data,parentNode) =>{
parentNode.innerHTML = "";

// let idEle = document.createElement("p");
// idEle.innerText = data.id
let authorEle = document.createElement("p");
authorEle.textContent = "Author Name :"+" " +data.author 
let bodyEle = document.createElement("p");
bodyEle.textContent = "Blog :"+" " +data.body


parentNode.append(authorEle,bodyEle)
}