// //Accerder al elemento por su id

// let contenido= document.getElementById("features");
// console.log(contenido);

// //Acceder al elmento por su selector

// let con1= document.querySelector("p");
// console.log(con1)

// //Acceder al elemento por su selector id

// let cont2=document.querySelector("#features");
// console.log(cont2);

// //Acceder al elemento por su selector clase

// let cont3=document.querySelector(".feature");
// console.log(cont3);

// //Acceder a varios elementos por su selector

// let cont4=document.querySelectorAll("p");
// console.log(cont4);

// //Acceder a uno de los elementos del nodeList

// let nost5= document.querySelectorAll("p")[1];

// //Recorrer nodeList
// document.querySelectorAll("p").forEach((el)=>console.log(el))

// //Ejemplo de acceso a campo de formulario
// let num1=document.getElementById("num1").name;
// console.log(num1);

// //Acceder y cambiar el valor de un atributo
// console.log(document.querySelector("a").getAttribute("href"))
// console.log(document.querySelector("a").setAttribute("href","https://www.youtube.com"))

// //Acceder al atributo Style para cambiar estilos css interno
// let mys=document.querySelector("#features");
// mys.style.setProperty("color","rgb(16, 63, 70)");
// mys.style.setProperty("background","rgb(126, 103, 73)");


// //Acceder a un selector y cambiar su contenido (nodo de texto)
// let mic=document.querySelector(".feature");
// let text=`
// <h1>Yeison</h1>
// <p>Un párrafo</p>
// <p>Otro párrafo</p>
// `
// mic.innerHTML=text;


let mic=document.querySelector(".nombre");
mic.textContent="Yeison David Rodriguez Rodriguez"


let mic2=document.querySelector(".feature-2");
let text=`
<h1>Yeison Rodriguez</h1>
<p>Aprendiz Ficha 2687390 ADSO</p>
`
mic2.innerHTML=text;    


//Crear contenido en el DOM
let img1=document.createElement("img");
img1.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRhGXmM4xJc57e4MkpnYbQWPtVIS3fEaq3OKJahND3husnLcp7R7OJQUNWCrZ25ymjUSM&usqp=CAU"
document.body.appendChild(img1)
img1.style.setProperty("width","400px");

let caja=document.createElement("div");
caja.innerHTML=`<img class="img2" src="img/apocosipa.jpg">`
mic2.appendChild(caja)
let img2=document.querySelector(".img2");
img2.style.setProperty("width","400px")


//Remover elemento
caja.remove(img2)