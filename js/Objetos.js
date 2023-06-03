

//podemos crear un arreglo de objetos 
const instructores=[
    { firstName:"Jennifer", lastName:"Fajardo", signature:"JavaScript"}
]

desicion=1;
while(desicion==1){

    desicion2=prompt("Que operacion quieres hacer? 1. Agregar instructor  2. Ver instructor  3.  Buscar instructor  4. Modificar instructor 5. Borrar instructor 6. Ordenar a-z")

switch(desicion2){

    case "1":
        var Instructor={
            
            firstName:prompt("nombre"),
            lastName:prompt("Apellido"),
            signature:prompt("Asignatura"),
            
        }
        instructores.push(Instructor);
        console.log(instructores)    

    break;
    case "2":
        console.log("Estos son los instructores agregados: ")
        instructores.forEach(instructores => {
            console.log(`${instructores['firstName']},${instructores['lastName']},${instructores['signature']} ` )
           });
    break;
    case "3":
        let nombre1=prompt("Nombre del aprendiz que quiere buscar")
        let nombres = instructores.find(instructores => instructores.firstName == nombre1);
        console.log(nombres==nombre1)
                  
        break;
    case "4":
        let posicion=parseInt(prompt("Cual es la posicion que quiere modificar?"))
        instructores[posicion].firstName=prompt("Cual es el nuevo nombre")
        instructores[posicion].lastName=prompt("Cual es el nuevo apellido")
        instructores[posicion].signature=prompt("Cual es la nueva asignatura ")
        
        instructores.forEach(instructores => {
            console.log(`${instructores['firstName']},${instructores['lastName']},${instructores['signature']} ` )
           });
        break;
    case "5":
        let posicion2=parseInt(prompt("Cual es la posicion que quiere borrar?"))
        instructores.splice(posicion2, 1);
        instructores.forEach(instructores => {
            console.log(`${instructores['firstName']},${instructores['lastName']},${instructores['signature']} ` )
           });
        break;
    case "6":
        instructores.sort((a, y) => a.firstName - y.firstName);
        console.log(instructores);
        break
    default:
        alert("La opcion que escogiste no existe")
        break;
}


//Agregar instructores

desicion=parseInt(prompt("Quieres hacer otra operacion? 1.Si 2.No"))
}