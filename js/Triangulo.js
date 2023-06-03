let btn=document.getElementById("btnDeterminar");

//Escuchar evento 
btn.addEventListener('click',function determinar(e){
    e.preventDefault()
    //Entradas
    let lad1=parseInt(document.getElementById("lad1").value)
    let lad2=parseInt(document.getElementById("lad2").value)
    let lad3=parseInt(document.getElementById("lad3").value)

    //console.log(`El numero 1 es: ${num1} el numero 2 es: ${num2} y la op es: ${op}`)
    if(lad1==lad2 && lad1==lad3){
            //Acceder al div resultado
            let eq=document.querySelector(".resultado")
            eq.innerHTML=`Las medidas de los lados son <b>${lad1}</b>, <b>${lad2}</b>, <b>${lad3}</b> tiene sus tres lados iguales, por ende es un triangulo <b>equilatero</b>`
    } else if(lad1==lad2 && lad1!=lad3 || lad1==lad3 && lad1!=lad2 || lad2==lad3 && lad2!=lad1){
        //Acceder al div resultado
        let is=document.querySelector(".resultado")
        is.innerHTML=`Las medidas de los lados son <b>${lad1}</b>, <b>${lad2}</b>, <b>${lad3}</b> tiene dos de sus lados iguales, por ende es un triangulo <b>isosceles</b>`
    } else if(lad1!=lad2 && lad1!=lad3 || lad2!=lad1 && lad2!=lad3  || lad3!=lad1 && lad3!=lad2) {
        //Acceder al div resultado
        let es=document.querySelector(".resultado")
        es.innerHTML=`Las medidas de los lados son <b>${lad1}</b>, <b>${lad2}</b>, <b>${lad3}</b> ninguno de sus lados son iguales, por ende es un triangulo <b>escaleno</b>`
    } else{
    //Acceder al div resultado
    let nu=document.querySelector(".resultado")
    nu.innerHTML=`Tienes que darle valor a los lados`
}
})