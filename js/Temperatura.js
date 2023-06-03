let btn=document.getElementById("btnConvertir");


btn.onclick=function convertir(e){
    e.preventDefault()
    //Entradas
    let gra1=parseInt(document.getElementById("gra1").value)
    let op=parseInt(document.getElementById("op").value)
    let op1=parseInt(document.getElementById("op1").value)

    if(op==1 & op1==2){
        let cel2=(gra1+273.15)
        alert(`Los grados Celsius son: ${gra1} y los grados Kelvin son: ${cel2}`)
    }
    else if(op==1 & op1==3){
        let cel=(gra1*5/9)+32
        alert(`Los grados Celsius son: ${gra1} y los grados Fahrenheit son: ${cel}`)
    }

    else if(op==2 & op1==3){
        let kev1=((gra1-273.15)*9/5)+32
        alert(`Los grados Kelvin son: ${gra1} y los grados Fahrenheit son: ${kev}`)
    }
    else if(op==2 & op1==1){
        let kev2=gra1-273.15
        alert(`Los grados Kelvin son: ${gra1} y los grados Celsius son: ${kev2}`)
    }

    else if(op==3 & op1==2){
        let far2=((gra1-32)*(5/9))+273.15
        alert(`Los grados Fahrenheit son: ${gra1} y los grados Kelvin son: ${far2}`)
    }
    else if(op==3 & op1==1){
        let far=(gra1-32)*(5/9)
        alert(`Los grados Fahrenheit son: ${gra1} y los grados Celsius son: ${far}`)
    }
    else{
        alert("No puedes convertir los mismos grados")
    }
}