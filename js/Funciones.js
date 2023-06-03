//Metodos para definir funciones

//Funcion por declaracion

//1.Declara la funcin}

/*function saludar(nombre){
    //cuerpo
    document.write(`Buenos dias <b style= color:blue>${nombre}</b><br>`);
}

//Invocar la funcion
saludar("Yeison");


let num1=parseInt(prompt("Ingrese un numero"));
let num2=parseInt(prompt("Ingrese un numero"));

function sumar(){
    document.write(`La suma entre ${num1} y ${num2} es ${num1+num2}`);
}

function sumar(num1,num2){
    document.write(`La suma entre ${num1} y ${num2} es ${num1+num2}`);
}

sumar(num1,num2);  

function sumar(num1,num2){
    return num1+num2;
}

document.write(`La suma entre ${num1} y ${num2} es ${sumar(num1,num2)} <br>`);

//Funcion por expresion

let resta=function disminuir(num1,num2){
    document.write(`La resta entre ${num1} y ${num2} es ${num1-num2}<br>`);
}

//Se invoca por el nombre de la variable
resta(num1,num2);

//Funcion Anonima
let mult=function(num1,num2){
    return num1*num2;
}

document.write(`La multiplicación entre ${num1} y ${num2} es ${mult(num1,num2)} <br>`);

//Funciones Flecha

let div= (num1,num2)=>{
    return num1/num2;
}

document.write(`La división entre ${num1} y ${num2} es ${div(num1,num2)} <br>`);
*/


//Ejercicio 1

    var name=prompt("Ingrese su nombre");
    var valorG=parseInt(prompt("Ingrese el valor global"));
    seguir=true;

    let lanzar= function(){
        return parseInt(Math.random()*2);
        } 
        var lanzamiento= lanzar();
        
        let ganar= ()=>{
            ganancias= apuesta*2;
            valorGG= valorG-apuesta;
            valorGG1= valorG+ganancias;
            return valorGG1
        }
        
        let perder= ()=>{
            valorGP= valorG-apuesta;
            return valorGP;
        } 

    while(seguir==true){

    

    var apuesta=parseInt(prompt("Cuanto quiere apostar?"));
    var esco=parseInt(prompt("Cual escoge?  1. Cara 2. Sello"));

    lanzamiento=lanzar();
    if(apuesta<=valorG){
        if(esco==1 && lanzamiento==1  || esco==2 && lanzamiento==0){
            alert(`ganaste el doble de tu apuesta, ahora tu valor global es ${ganar()}`)
            valorG=ganar();

        } else if(esco==1 && lanzamiento==0 || esco==2 && lanzamiento==1){
            alert(`perdiste,  se te restara lo apostado, ahora tu valor global es ${perder()}`)
            valorG=perder();
        } 
    } else {
        alert("Estas apostando mas que el valor global")
    }


    seguir=confirm("¿Desea hacer otra apuesta?");
    }