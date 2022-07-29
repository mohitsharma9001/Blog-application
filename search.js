import navbar from  "../component/navbar.js"
import {displayData} from "./component/getDatautli.js"
let navDiv = document.getElementById("navber");

navDiv.innerHTML = navbar()

let tableData = document.getElementById("blog-data")
document.getElementById("search-btn").addEventListener("click",async function(){
try {
   let searchData = document.getElementById("search").value;
   
   let res = await fetch(`http://localhost:3004/blog?q=${searchData}`);

   let data = await res.json();
   displayData(data,tableData);
} catch (error) {
    console.log(error)
}
});