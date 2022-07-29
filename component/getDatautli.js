   
   const saveDataToLocalstorage = ((key,value) =>{
    localStorage.setItem(key,JSON.stringify(value))
})
   
   
   function displayData(data,parentNode){
    data.forEach((blog) => {
        let tr = document.createElement("tr")

        let td = document.createElement("td")
        td.innerText = blog.id;

        let td1 = document.createElement("td")
        td1.innerText = blog.author
          
        let td2 = document.createElement("td")
        let view = document.createElement("button");
        view.innerText = "View"
        view.onclick= (()=>{
            saveDataToLocalstorage("blogId",blog.id);
            location.href="showBlog.html"
        })

        td2.append(view)
        


        let td3 = document.createElement("td")
        let edit = document.createElement("button");
        edit.innerText = "Edit"
        edit.onclick= (()=>{
            saveDataToLocalstorage("blogId",blog.id);
            location.href="edit.html"
        })

        td3.append(edit)
        



        let td4 = document.createElement("td")
        let dleate = document.createElement("button");
        dleate.innerText = "Dleate"
        dleate.onclick= async function (){
            let res= await fetch(`http://localhost:3004/blog/${blog.id}`,{
                method : "DELETE"
            });
            window.location.reload()
        };

        td4.append(dleate)
       
        tr.append(td,td1,td2,td3,td4)
        document.querySelector("#blog-data").append(tr)

    });
}

export {displayData}