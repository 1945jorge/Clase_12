//FUNCION SALUDO*/  

function saludo() {

  let nombre = prompt("Ingrese su nombre");


    if(nombre == ""){
      return alert("Debe agregar un nombre!");
    }
    else{
      return alert (nombre + " " + "Estudiando JavaScript" );
    }
}


