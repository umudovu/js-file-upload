let uploadArea = document.querySelector(".upload");
let upload = document.getElementById("file");
let upitem = document.getElementById("upitem");
let tbody = document.getElementById("tbody");
let removebtn=document.getElementById("remove");

upitem.addEventListener("click", function () {
    upload.click();
})

upload.addEventListener("change", function(ev) {
    //console.log(e.target.files);
    //console.log(ev.target.files);
    for (const file of ev.target.files) {
        let reader = new FileReader();
        reader.onloadend = function (e) {
            
            tbody.innerHTML+=`
              <tr>
                <td><img src="${e.target.result}" width="100" alt=""></td>
                <td>${file.name}</td>
                <td>${file.size}</td>
                <td><i class="fa-solid fa-ban"></i></td>
              </tr>
            `
            let faban=document.querySelectorAll(".fa-ban");
            faban.forEach(i=>{
                i.addEventListener("click",function(e){
                    this.parentElement.parentElement.remove();
                })
            })
            
        }
        reader.readAsDataURL(file);

    }

})


removebtn.addEventListener("click",function(e){
    tbody.innerHTML="";
})

uploadArea.ondragover=function(ev){
    ev.preventDefault();
}
uploadArea.ondrop=function(ev){
    ev.preventDefault();
}