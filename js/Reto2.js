//Onblur
function cambiarMayuscula(elemento){
    let texto=elemento.value;
    elemento.value=texto.toUpperCase();
}

//Onclick
function cam(){
    document.getElementById("ti2").innerHTML="Aja te cambié!"
}

document.getElementById("bu2").onclick=function cambiar(e){
    cam();
}

//ondblclick
function ocultar(objeto)
{
  objeto.style.display='none';
}

//onFocus
function vaciar(control){
    control.value='';
}

//onLoad
function cargarBody(){
    alert('Seha cargado el contenido de la etiqueta body.')
}

//onmousedown
function presionar(tipo){
    var mensaje = document.getElementById("Mensaje");
    if(tipo==1){
        mensaje.value="Boton presionado"
    }
    else if(tipo==2){
        mensaje.value="Boton liberado"
    }
}

//OnmouseOver y onmouseOut
function pintar(color){
    document.getElementById("Cuadrado").style.backgroundColor=color;
}


//onsubmit
function form_submit() 
{ 
	var nombre=document.miForm.nombre.value; 
	var texto; 
	texto="Nombre: " + nombre; 
	alert(texto); 
}

//Onunload

