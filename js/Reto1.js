let btn=document.getElementById("btnOperar");

//Escuchar evento 
btn.addEventListener('click',function operar(e){
    e.preventDefault()
    //Entradas
    let tex1=document.getElementById("tex1").value
    let op=parseInt(document.getElementById("op").value)

    //console.log(`El numero 1 es: ${num1} el numero 2 es: ${num2} y la op es: ${op}`)
    switch(op){
        case 1:
            //Acceder al div resultado
            let sum=document.querySelector(".resultado")
            sum.innerHTML=`La longitud de la palabra <b>${tex1}</b> es: <b>${tex1.length}</b>`
        break;
        case 2:
            //Acceder al div resultado
            let res=document.querySelector(".resultado")
            res.innerHTML=`La palabra <b>${tex1}</b> en mayuscula es: <b>${tex1.toUpperCase()}</b>`
        break;
        case 3:
            //Acceder al div resultado
            let mul=document.querySelector(".resultado")
            mul.innerHTML=`La palabra <b>${tex1}</b> en minuscula es: <b>${tex1.toLowerCase()}</b>`
        break;
        case 4:
            //Acceder al div resultado
            let div=document.querySelector(".resultado")
            div.innerHTML=`La primera letra de la palabra <b>${tex1}</b> es: <b>${tex1.charAt(0)}</b>`
        break;
    }
})