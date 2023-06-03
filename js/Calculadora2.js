let btn=document.getElementById("btnCalcular");

//Escuchar evento 
btn.addEventListener('click',function calcular(e){
    e.preventDefault()
    //Entradas
    let num1=document.getElementById("num1").value
    let num2=document.getElementById("num2").value
    let op=parseInt(document.getElementById("op").value)

    //console.log(`El numero 1 es: ${num1} el numero 2 es: ${num2} y la op es: ${op}`)
    switch(op){
        case 1:
            let suma=parseInt(num1)+parseInt(num2)
            //Acceder al div resultado
            let sum=document.querySelector(".resultado")
            sum.innerHTML=`La suma entre <b>${num1}</b> y <b>${num2}</b> es <b>${suma}</b>`
        break;
        case 2:
            let resta=parseInt(num1)-parseInt(num2)
            //Acceder al div resultado
            let res=document.querySelector(".resultado")
            res.innerHTML=`La eresta entre <b>${num1}</b> y <b>${num2}</b> es <b>${resta}</b>`
        break;
        case 3:
            let multi=parseInt(num1)*parseInt(num2)
            //Acceder al div resultado
            let mul=document.querySelector(".resultado")
            mul.innerHTML=`La multiplicacion entre <b>${num1}</b> y <b>${num2}</b> es <b>${multi}</b>`
        break;
        case 4:
            let divi=parseInt(num1)/parseInt(num2)
            //Acceder al div resultado
            let div=document.querySelector(".resultado")
            div.innerHTML=`La divicion entre <b>${num1}</b> y <b>${num2}</b> es <b>${divi}</b>`
        break;
    }
})