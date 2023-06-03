

/*let numberOne=parseInt(prompt("Digite el primer numero"));
let numberTwo=parseInt(prompt("Digite el segundo numero"));
let suma=numberOne+numberTwo;
let nameStudent="Yeison David";
let age= 17;
let state= true;
const IVA= 19;

console.log(`Mi nombre es ${nameStudent} y tengo ${age}, el IVA de mi edad es ${age*(IVA/100)}`);
document.write(`Mi nombre es ${nameStudent} y tengo ${age}, el IVA de mi edad es ${age*(IVA/100)}<br>`);

alert(`La suma de los numero es ${suma} `);

document.write(`El primer numero es ${numberOne}, el segundo numero es ${numberTwo} y la suma de los dos es ${suma}`);



let nameStudent=prompt("Digite su nombre");
let age=parseInt(prompt("Digite su edad"));

alert(`${nameStudent} tienes ${age} años, en 15 años tendras ${age+15} años de edad`);


//Condicionales
if (numberOne>numberTwo) {
    alert(`El numero mayor es ${numberOne}`);
} 
else if(numberOne==numberTwo) {
    alert(`Los dos numeros son iguales`)
}
else {
    alert(`El numero mayor es ${numberTwo}`);
}

// Variacion condicional dobles operadores ternario

let numMayor=(numberOne>numberTwo)
?"El numero mayor es el primero" //Cuando se cumple
:"El numero mayor es el segundo" //Cuando la condicion no se cumple

console.log(numMayor);


let usuario=prompt("Digite su usuario");
let password=prompt("Digite su contraseña");

if (usuario==("Yeison123") && password==("Yeisonxd:v")) {
    console.log("Bienvenido a mi App");
} else if( usuario==("Yeison123") && password!==("Yeisonxd:v")) {
    console.log("upps, parece qe tu datos de acceso son incorrectos");
} else if ( password==("Yeisonxd:v") && usuario!==("Yeison123")){
    console.log("Nombre de usurio incorrecto");
} else {
    console.log("Acceso denegado");
}

do{

let desicion=prompt("1. Ingresar al estudiante  2. Ver estudiante  3. Modificar estudiante");

switch(desicion){
    case "1": 
        var tipoDoc=prompt("Tipo de documento : 1. Tarjeta de identidad 2. Cedula  3. Pasaporte  4. Registro civil");
        var numDoc=parseInt(prompt("Digite el numero de documento"));
        var name=prompt("Digite el nombre del estudiante");
        var lastName=prompt("Digite el apellido del estudiante")
    break;
    case "2":
        let numDoc2=prompt("Digite el numero de documento del estudiante");
        if (numDoc2==numDoc){
            alert(`${name} ${lastName} identificado con ${tipoDoc} No. ${numDoc}`);
        }
        else {
            alert("No existe ningun estudiante con ese numero de documento")
        }
    break;
    case "3":
        do{
        let modificar=parseInt(prompt("Cual dato quieres modificar: 1. tipo de documento  2. Numero del documento  3. Nombre  4. Apellido"))
         if (modificar==1){
            tipoDoc=prompt("Digite el nuevo tipo de documento 1. Tarjeta de identidad  2. Cedula  3. Pasaporte  4. Registro Civil")
            if (tipoDoc=="Tarjeta de identidad"){
                alert(`El nuevo tipo de documento es Tarjeta de identidad`)
            } else if (tipoDoc=="Cedula") {
                alert(`El nuevo tipo de documento es Cedula`)
            } else if (tipoDoc=="Pasaporte") {
                alert(`El nuevo tipo de documento es Pasaporte`)
            } else {
                alert(`El nuevo tipo de documento es Registro civil`)
            }
         } else if(modificar==2){
            numDoc=parseInt(prompt("Digita el nuevo numero de documento"));
            alert(`Tu nuevo numero de documento es ${numDoc}`);
         } else if(modificar==3) {
            name=prompt("Digita el nuevo nombre");
            alert(`Tu nuevo nombre es ${name}`);
         } else {
            lastName=prompt("Digita el nuevo apellido");
            alert(`Tu nuevo apellido es ${lastName}`);
         }

         var desicion2=prompt("Quieres modificar otro dato  1.Si  2.No")
        } while(desicion2=="1")
    break;
         
    default:
        
        alert("La desicion que tomaste no existe ")
    break;
}

var desicion2=prompt("Quieres continuar 1. si  2. no")

}while(desicion2=="1")


/*
for(let i=1;1<=5;i++){
    //cuerpo del ciclo
    console.log(`<b style: color:red>Hola estoy dentro del ciclo</b>`);
}
seguir=true;
while(seguir==true){
    console.log(`<b>Hola estoy dentro del ciclo</b>`);
    seguir=confirm("¿Desea continuar?");
}*/