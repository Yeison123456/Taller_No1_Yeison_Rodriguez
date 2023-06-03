let btn=document.getElementById("abrirModal")
let ventanaModal=document.getElementById("ventanaModal")
let cerrarModal=document.querySelector(".cerrarModal")


btn.addEventListener("click",()=>{
    ventanaModal.style.display="block";
})

cerrarModal.addEventListener("click",()=>{
    ventanaModal.style.display="none";
})

// ventanaModal.addEventListener("click",()=>{
//     ventanaModal.style.display="none"
// })  

ventanaModal.onclick=function cambiar(){
    ventanaModal.style.display="none";
}