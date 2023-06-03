//Acceder al formulario

let form=document.getElementById("validacion");
let fet=document.querySelector(".caNoDoc .feedback")
let fetN=document.querySelector(".caNom .feedback")
let fetA=document.querySelector(".caApe .feedback")
let fetC=document.querySelector(".caCo .feedback")
let fetNT=document.querySelector(".caNum .feedback")

//Establecer las reglas de validacion
const $number=/^[0-9]{1,15}/
const $text=/^[A-Z a-zñÑáÁ]{1,50}/


//Validacion antes de enviar el formulario
form.noDoc.addEventListener('input',(e)=>{
e.preventDefault();

console.log(e.target.value);

if($number.test(e.target.value)){
    form.noDoc.setAttribute("class","succes")
    fet.style.setProperty("visibility","hidden")
    fet.style.setProperty("opacity","0")
}
else{
    form.noDoc.setAttribute("class","error")
    fet.textContent="Solo puede digitar numeros y la longitud debe ser minimo de 1"
    fet.style.setProperty("visibility","visible")
    fet.style.setProperty("opacity","1")
} 
})  


form.noNom.addEventListener('input',(e)=>{
    e.preventDefault();
    
    console.log(e.target.value);
    
    if($text.test(e.target.value)){
        form.noNom.setAttribute("class","succes")
        fetA.style.setProperty("visibility","hidden")
        fetA.style.setProperty("opacity","0")
    }
    else{
        form.noNom.setAttribute("class","error")
        fetA.textContent="Solo puede digitar letras y la longitud debe ser minimo de 1"
        fetA.style.setProperty("visibility","visible")
        fetA.style.setProperty("opacity","1")
    } 
    })  


form.noApe.addEventListener('input',(e)=>{
    e.preventDefault();
    
    console.log(e.target.value);
    
    if($text.test(e.target.value)){
        form.noApe.setAttribute("class","succes")
        fetN.style.setProperty("visibility","hidden")
        fetN.style.setProperty("opacity","0")
    }
    else{
        form.noApe.setAttribute("class","error")
        fetN.textContent="Solo puede digitar letras y la longitud debe ser minimo de 1"
        fetN.style.setProperty("visibility","visible")
        fetN.style.setProperty("opacity","1")
    } 
})


form.noCo.addEventListener('input',(e)=>{
    e.preventDefault();
    
    console.log(e.target.value);
    
    if($text.test(e.target.value)){
        form.noCo.setAttribute("class","succes")
        fetC.style.setProperty("visibility","hidden")
        fetC.style.setProperty("opacity","0")
    }
    else{
        form.noCo.setAttribute("class","error")
        fetC.textContent="Solo puede digitar letras y la longitud debe ser minimo de 1"
        fetC.style.setProperty("visibility","visible")
        fetC.style.setProperty("opacity","1")
    } 
})

form.noNum.addEventListener('input',(e)=>{
    e.preventDefault();
        
    console.log(e.target.value);
        
    if($number.test(e.target.value)){
            form.noNum.setAttribute("class","succes")
            fetNT.style.setProperty("visibility","hidden")
            fetNT.style.setProperty("opacity","0")
    }
    else{
            form.noNum.setAttribute("class","error")
            fetNT.textContent="Solo puede digitar numeros y la longitud debe ser minimo de 1"
            fetNT.style.setProperty("visibility","visible")
            fetNT.style.setProperty("opacity","1")
    } 
    })  

//Validacion de campos vacios 

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const noDoc=form.noDoc.value;
    const noNom=form.noNom.value;
    const noApe=form.noApe.value;
    const noCo=form.noCo.value;
    const noNum=form.noNum.value;

    if(noDoc==null || noDoc==0){
        alert("Debe ingresar un numero de documento")
        form.noDoc.focus()
        form.noDoc.setAttribute("class","error")
    }
    else if(noNom==null  || noNom==0 ){
        alert("Debe ingresar un nombre")
        form.noNom.focus()
        form.noNom.setAttribute("class","error")
    }
    else if(noApe==null || noApe==0){
        alert("Debe ingresar un Apellido")
        form.noApe.focus()
        form.noApe.setAttribute("class","error")
    }
    else if(noCo==null || noCo==0){
        alert("Debe ingresar un correo")
        form.noCo.focus()
        form.noCo.setAttribute("class","error")
    }
    else if(noNum==null || noNum==0){
        alert("Debe ingresar un numero de telefono")
        form.noNum.focus()
        form.noNum.setAttribute("class","error")
    }
    else{
        form.submit()
        alert("Datos enviados")
    }

})