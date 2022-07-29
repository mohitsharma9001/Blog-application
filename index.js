import navbar from  "../component/navbar.js"
import {displayData} from "./component/getDatautli.js"
let navDiv = document.getElementById("navber");

navDiv.innerHTML = navbar()






async function getdata()
{
    try {
        
        let res= await fetch(`http://localhost:3004/blog`);

        let data = await res.json();

       displayData(data)

    } catch (error) {
        console.log(error)
    }
}
getdata();


