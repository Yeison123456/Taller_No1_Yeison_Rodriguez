/*Perimetro del Circulo*/

let btnC=document.getElementById("abrirCirculoP")
let ventanaCirculoP=document.getElementById("circuloModalP")
let cerrarCirculo=document.querySelector(".cerrarCirculoP")


btnC.addEventListener("click",()=>{
    ventanaCirculoP.style.display="block";
})

cerrarCirculo.addEventListener("click",()=>{
    ventanaCirculoP.style.display="none";
})

/*Operacion del perimetro en circulo*/

let btnP=document.getElementById("btnCalcularPerimetroCir");

btnP.onclick=function calcular(e){
    e.preventDefault()
    //Entradas
    let diC=parseInt(document.getElementById("diC").value)
    let cal=diC*3.1416;
    let PC=document.querySelector(".resultadoPC")
    PC.innerHTML=`El perimetro del circulo es: <b>${cal}</b>`
}

/*Area del circulo*/

let btnCA=document.getElementById("abrirCirculoA")
let ventanaCirculoA=document.getElementById("circuloModalA")
let cerrarCirculoA=document.querySelector(".cerrarCirculoA")


btnCA.addEventListener("click",()=>{
    ventanaCirculoA.style.display="block";
})

cerrarCirculoA.addEventListener("click",()=>{
    ventanaCirculoA.style.display="none";
})

/*Operacion del area en circulo*/

let btnA=document.getElementById("btnCalcularAreaCir");

btnA.onclick=function calcularA(e){
    e.preventDefault()
    //Entradas
    let raC=parseInt(document.getElementById("raC").value)
    let cal=(raC*raC)*3.1416;
    let AC=document.querySelector(".resultadoAC")
    AC.innerHTML=`El area del circulo es: <b>${cal}</b>`
}

/*Perimetro del Triangulo*/

let btnTP=document.getElementById("abrirTrianP")
let ventanaTrianP=document.getElementById("trianModalP")
let cerrarTrianP=document.querySelector(".cerrarTrianP")


btnTP.addEventListener("click",()=>{
    ventanaTrianP.style.display="block";
})

cerrarTrianP.addEventListener("click",()=>{
    ventanaTrianP.style.display="none";
})

/*Operacion del perimetro en triangulo*/

let btnTPC=document.getElementById("btnCalcularPerimetrotri");

btnTPC.onclick=function calcularPT(e){
    e.preventDefault()
    //Entradas
    let lad1=parseInt(document.getElementById("lad1T").value)
    let lad2=parseInt(document.getElementById("lad2T").value)
    let lad3=parseInt(document.getElementById("lad3T").value)


    let calPT=parseInt(lad1+lad2+lad3);
    let resultadoPT=document.querySelector(".resultadoPT")
    resultadoPT.innerHTML=`El perimetro del triangulo es: <b>${calPT}</b>`
}

/*Area del Triangulo*/

let btnTA=document.getElementById("abrirTrianA")
let ventanaTrianA=document.getElementById("trianModalA")
let cerrarTrianA=document.querySelector(".cerrarTrianA")


btnTA.addEventListener("click",()=>{
    ventanaTrianA.style.display="block";
})

cerrarTrianA.addEventListener("click",()=>{
    ventanaTrianA.style.display="none";
})

/*Operacion del perimetro en triangulo*/

let btnTAC=document.getElementById("btnCalcularAreaTri");

btnTAC.onclick=function calcularAT(e){
    e.preventDefault()
    //Entradas
    let baT=parseInt(document.getElementById("baT").value)
    let alT=parseInt(document.getElementById("alT").value)


    let calAT=(baT*alT)/2;
    let resultadoAT=document.querySelector(".resultadoAT")
    resultadoAT.innerHTML=`El area del triangulo es: <b>${calAT}</b>`
}

/*Perimetro del Cuadrado*/

let btnPC=document.getElementById("abrirCuadraP")
let ventanaCuadraP=document.getElementById("cuadraModalP")
let cerrarCuadraP=document.querySelector(".cerrarCuadraP")


btnPC.addEventListener("click",()=>{
    ventanaCuadraP.style.display="block";
})

cerrarCuadraP.addEventListener("click",()=>{
    ventanaCuadraP.style.display="none";
})

/*Operacion del perimetro en EL Cuadrado*/

let btnCP=document.getElementById("btnCalcularPerimetroCuadra");

btnCP.onclick=function calcularPC(e){
    e.preventDefault()
    //Entradas
    let lad1C=parseInt(document.getElementById("lad1C").value)


    let calPC=lad1C*4;
    let resCP=document.querySelector(".resultadoCP")
    resCP.innerHTML=`El perimetro del cuadrado es: <b>${calPC}</b>`
}

/*Area del Cuadrado*/

let btnAC=document.getElementById("abrirCuadraA")
let ventanaCuadraA=document.getElementById("cuadraModalA")
let cerrarCuadraA=document.querySelector(".cerrarCuadraA")


btnAC.addEventListener("click",()=>{
    ventanaCuadraA.style.display="block";
})

cerrarCuadraA.addEventListener("click",()=>{
    ventanaCuadraA.style.display="none";
})

/*Operacion del perimetro en EL Cuadrado*/

let btnCAC=document.getElementById("btnCalcularAreaCuadra");

btnCAC.onclick=function calcularCAC(e){
    e.preventDefault()
    //Entradas
    let lad2C=parseInt(document.getElementById("lad2C").value)


    let calAC=lad2C*lad2C;
    let resCA=document.querySelector(".resultadoCA")
    resCA.innerHTML=`El perimetro del cuadrado es: <b>${calAC}</b>`
}

/*Perimetro del Rectangulo*/

let btnPR=document.getElementById("abrirRectaP")
let ventanaRectaP=document.getElementById("rectaModalP")
let cerrarRectaP=document.querySelector(".cerrarRectaP")


btnPR.addEventListener("click",()=>{
    ventanaRectaP.style.display="block";
})

cerrarRectaP.addEventListener("click",()=>{
    ventanaRectaP.style.display="none";
})

/*Operacion del perimetro en el Rectangulo*/

let btnRP=document.getElementById("btnCalcularPerimetroRecta");

btnRP.onclick=function calcularRP(e){
    e.preventDefault()
    //Entradas
    let lad1R1=parseInt(document.getElementById("lad1Re").value)
    let lad2Re=parseInt(document.getElementById("lad2Re").value)
    let lad3Re=parseInt(document.getElementById("lad3Re").value)
    let lad4Re=parseInt(document.getElementById("lad4Re").value)

    let calRP=lad1R1+lad2Re+lad3Re+lad4Re;
    let resRP=document.querySelector(".resultadoRP")
    resRP.innerHTML=`El perimetro del cuadrado es: <b>${calRP}</b>`
}

/*Area del Rectangulo*/

let btnAR=document.getElementById("abrirRectaA")
let ventanaRectaA=document.getElementById("rectaModalA")
let cerrarRectaA=document.querySelector(".cerrarRectaA")


btnAR.addEventListener("click",()=>{
    ventanaRectaA.style.display="block";
})

cerrarRectaA.addEventListener("click",()=>{
    ventanaRectaA.style.display="none";
})

/*Operacion del area en el Rectangulo*/

let btnRA=document.getElementById("btnCalcularAreaRecta");

btnRA.onclick=function calcularRP(e){
    e.preventDefault()
    //Entradas
    let larRe=parseInt(document.getElementById("larRe").value)
    let anRe=parseInt(document.getElementById("anRe").value)


    let calRA=larRe*anRe;
    let resRA=document.querySelector(".resultadoRA")
    resRA.innerHTML=`El perimetro del cuadrado es: <b>${calRA}</b>`
}