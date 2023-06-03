let btn=document.getElementById("abrirTerminos")
let ventana=document.getElementById("terminosModal")
let cerrar=document.querySelector(".cerrar")



btn.addEventListener("click",()=>{
    ventana.style.display="block";
})

cerrar.addEventListener("click",()=>{
    ventana.style.display="none";
})

//formulario
let form=document.getElementById("formulario");
let fet=document.querySelector(".caNoDoc .feedback")
let fetN=document.querySelector(".caNom .feedback")
let fetA=document.querySelector(".caApe .feedback")
let fetF=document.querySelector(".caFecha .feedback")
let fetC=document.querySelector(".caCo .feedback")
let fetCon=document.querySelector(".caCon .feedback")
let fetCon2=document.querySelector(".caCon2 .feedback")
let fetTer=document.querySelector(".caTer .feedback")



//Reglas de validaciones 
const $number=/^[0-9]{5,50}/
const $text=/^[A-Z a-zñÑáÁ 0-9]{1,50}/
const $fecha=/^(19[0-9]{2}|200[0-2])-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
const $correo=/^([a-z0-9_\.-]+)@misena.edu\.co/
const $password=/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{10,30}/

//Validacion para numero de documento
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
        fet.textContent="La longitud debe ser minimo de 5 caracteres y no tener letras"
        fet.style.setProperty("visibility","visible")
        fet.style.setProperty("opacity","1")
    } 
})  

//Validacion para nombre
form.nombre.addEventListener('input',(e)=>{
    e.preventDefault();
    
    console.log(e.target.value);
    
    if($text.test(e.target.value)){
        form.nombre.setAttribute("class","succes")
        fetN.style.setProperty("visibility","hidden")
        fetN.style.setProperty("opacity","0")
    }
    else{
        form.nombre.setAttribute("class","error")
        fetN.textContent="La longitud debe ser minimo de 1 caracter"
        fetN.style.setProperty("visibility","visible")
        fetN.style.setProperty("opacity","1")
    } 
})

//Validacion para apellido
form.apellido.addEventListener('input',(e)=>{
    e.preventDefault();
        
    console.log(e.target.value);
    
    if($text.test(e.target.value)){
        form.apellido.setAttribute("class","succes")
        fetA.style.setProperty("visibility","hidden")
        fetA.style.setProperty("opacity","0")
    }
    else{
        form.apellido.setAttribute("class","error")
        fetA.textContent="La longitud debe ser minimo de 1 caracter"
        fetA.style.setProperty("visibility","visible")
        fetA.style.setProperty("opacity","1")
    } 
})

//Validacion para fecha de nacimiendo
 form.date.addEventListener('input',(e)=>{
     e.preventDefault();
    
     console.log(e.target.value); 
    
     if($fecha.test(e.target.value)){
         form.date.setAttribute("class","succes")
         fetF.style.setProperty("visibility","hidden")
         fetF.style.setProperty("opacity","0")
     }
     else{
         form.date.setAttribute("class","error")
         fetF.textContent="No eres mayor de edad"
         fetF.style.setProperty("visibility","visible")
         fetF.style.setProperty("opacity","1")
     } 
 })

//Validacion para el correo
form.correo.addEventListener('input',(e)=>{
    e.preventDefault();
     
    console.log(e.target.value); 
    
    if($correo.test(e.target.value)){
        form.correo.setAttribute("class","succes")
        fetC.style.setProperty("visibility","hidden")
        fetC.style.setProperty("opacity","0")
    }
    else{
        form.correo.setAttribute("class","error")
        fetC.textContent="El dominio debe de ser @misena.edu.co"
        fetC.style.setProperty("visibility","visible")
        fetC.style.setProperty("opacity","1")
    } 
})

//Validacion para la contraseña
form.password.addEventListener('input',(e)=>{
    e.preventDefault();
    
    console.log(e.target.value)
    
    if($password.test(e.target.value)){
        form.password.setAttribute("class","succes")
        fetCon.style.setProperty("visibility","hidden")
        fetCon.style.setProperty("opacity","0")
    }
    else{
        form.password.setAttribute("class","error")
        fetCon.textContent="Debe incluir mínimo una letra mayúscula, un número, una letra minúscula, un carácter y debe ser mínimo de 10 caracteres."
        fetCon.style.setProperty("visibility","visible")
        fetCon.style.setProperty("opacity","1")
    } 
})

var password=document.getElementById("password").value
var password2=document.getElementById("password2").value


form.password2.addEventListener('input',(e)=>{
    e.preventDefault();
    
    console.log(e.target.value);

    if($password.test(e.target.value) && password2==password){
        form.password2.setAttribute("class","succes")
        fetCon2.style.setProperty("visibility","hidden")
        fetCon2.style.setProperty("opacity","0")
    }
    else{
        form.password2.setAttribute("class","error")
        fetCon2.textContent="La contraseña no son iguales"
        fetCon2.style.setProperty("visibility","visible")
        fetCon2.style.setProperty("opacity","1")
    } 
})


//Validaciones 

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const tipDoc=form.tipDoc.value;
    const noDoc=form.noDoc.value;
    const nombre=form.nombre.value;
    const apellido=form.apellido.value;
    const date=form.date.value;
    const correo=form.correo.value
    const password=form.password.value;
    const password2=form.password2.value;
    const terminos=form.terminos.value;



    if(tipDoc==null || tipDoc==0){
        alert("Debe ingresar un tipo de documento")
        form.tipDoc.focus()
        form.tipDoc.setAttribute("class","error")
        console.log(terminos);
    }
    else if(noDoc==null  || noDoc==0 ){
        alert("Debe ingrese el numero de documento")
        form.noDoc.focus()
        form.noDoc.setAttribute("class","error")
    }
    else if(nombre==null  || nombre==0 ){
        alert("Debe ingresar un nombre")
        form.nombre.focus()
        form.nombre.setAttribute("class","error")
    }
    else if(apellido==null || apellido==0){
        alert("Debe ingresar un Apellido")
        form.apellido.focus()
        form.apellido.setAttribute("class","error")
    }
    else if(date==null || date==0){
        alert("Debe ingresar la fecha de nacimiento")
        form.date.focus()
        form.date.setAttribute("class","error")
    }
    else if(correo==null || correo==0){
        alert("Debe ingresar un correo")
        form.correo.focus()
        form.correo.setAttribute("class","error")
    }
    else if(password==null || password==0){
        alert("Debe ingresar una contraseña")
        form.password.focus()
        form.password.setAttribute("class","error")
    }
    else if(password2==null || password2==0){
        alert("Debe ingresar la contraseña de nuevo")
        form.password2.focus()
        form.password2.setAttribute("class","error")
    }
    else if(terminos!="acepto"){
        alert("Debes aceptar los terminos y condiciones")
        form.terminos.focus()
        form.terminos.setAttribute("class","error")
    }
    else{
        form.submit()
        alert("Datos enviados")
    }

})