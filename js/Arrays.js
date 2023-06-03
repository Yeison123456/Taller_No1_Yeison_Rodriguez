//Crear un array
/*
let onces=["Empanada","Tamal"];

//Imprimir array

document.write(onces);

//Acceder a un elemento de array
elemento1=onces[1];
document.write(onces[1]);
document.write(elemento1);

//Ultima posicion del array
document.write(onces[onces.length1]);

//Recorrer un array
onces.forEach(function(valor,posicion,array) {
    document.write(`En la posicion ${posicion} hay ${valor}`)
})

//Añadir elementos al final del array
onces.push("Juego","Pan","Gaseosa");
document.write(onces);

//Eliminar el ultimo elemento del array
onces.pop();
document.write(onces);

//Añadir un elemento al inicio del array
onces.unshift("Juego");
document.write(onces);

//Eliminar en una posicion en especifico
onces.splice(1,1);
document.write(onces);

//Metodo de busqueda filter 
let busqueda=onces.filter(onces=>onces=="Tamal");
document.write(busqueda);

//Metodo busqueda find
let busqueda2=onces.find(onces=>onces=="Juego");
document.write(busqueda2);*/

var aprendices=["Yeison","Camilo","Johan"];
do{
    let desicion=prompt("1. Agregar aprendiz  2. Ver aprendices  3.  Buscar aprendiz  4. Modificar aprendiz 5. Borrar aprendiz 6. Ordenar a-z");
    switch(desicion){
        case "1": 
            var nombre=prompt("Nombre del aprendiz");
            aprendices.push(nombre);
            alert(aprendices)
        break;
        case "2":
            alert(`Estos son los aprendices que estan registrado ${aprendices}`)    
        break;
        case "3":
            let nombre1=prompt("Nombre del aprendiz que quiere buscar")
            let busqueda=aprendices.filter(aprendices=>aprendices==nombre1);
            if(nombre1==busqueda){
                alert(`El aprendiz ${nombre1} si esta registrado`)
            } else {
                alert(`El aprendiz ${nombre1} no esta registrado`)
            }   
        break;
        case "4":
            aprendices.forEach(function(valor,posicion) {
                alert(`En la posicion ${posicion} esta ${valor} `)
            })
            aprendices.splice(prompt("Cual es la posicion que quiere modificar?"),1,prompt("Digite el nuevo nombre"));
            alert(aprendices);
        break;
        case "5":
            aprendices.forEach(function(valor,posicion) {
                alert(`En la posicion ${posicion} esta ${valor} `)
            })
            posicion1=prompt("Cual es la posicion del aprendiz que quiere eliminar?")
            aprendices.splice(posicion1,1);
            aprendices.forEach(function(valor,posicion) {
                alert(`En la posicion ${posicion} esta ${valor}`)
            })
        break;
        case "6":
            aprendices.sort();
            alert(aprendices);
        break;
        default:
            
            alert("La desicion que tomaste no existe ")
        break;
        
        
    } 
    
    var desicion2=prompt("Quieres continuar 1. si  2. no")


}while(desicion2=="1");
   