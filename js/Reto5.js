let btn=document.getElementById("btnConsultar");


btn.onclick=function consultar(e){
    e.preventDefault()
    //Entradas
    let op1=parseInt(document.getElementById("op1").value)
    let op2=parseInt(document.getElementById("op2").value)
    let op3=parseInt(document.getElementById("op3").value)

    if(op1==1 & op2==1 & op3==1 ){
        alert("La respuesta es correcta")
    }
    else if(op1==2 & op2==2 & op3==2 ){
        alert("La respuesta es correcta")
    }

    else if(op1==3 & op2==3 & op3==3 ){
        alert("La respuesta es correcta")
    }
    else if(op1==14 & op2==4 & op3==4 ){
        alert("La respuesta es correcta")
    }

    else if(op1==5 & op2==5 & op3==5 ){
        alert("La respuesta es correcta")
    }
    else if(op1==6 & op2==6 & op3==6 ){
        alert("La respuesta es correcta")
    }
    else if(op1==7 & op2==7 & op3==7 ){
        alert("La respuesta es correcta")
    }
    else {
        alert("La respuesta es incorrecta")
    }
}