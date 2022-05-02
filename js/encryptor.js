

// Funcion Saltar Linea

function saltarLinea() {
  document.write("<br><br>");
}

//Funcion imprimir datos

function imprimir(frase) {
  document.write(frase);
  saltarLinea();
}

//Limpiar Caja Uno

function limpiarCaja(caja) {
  var content;
  content = document.getElementById(caja).value = "";
  
}

function limpiarCajas() {
  var content;
  content = document.getElementById("cajaUno").value = "";
  content = document.getElementById("respuesta").value = " ";
  window.location.reload();
  content = document.getElementById("cajaUno").focus();
  document.getElementById("mensaje_Uno").style.display = "none";
  document.getElementById("mensaje_Dos").style.display = "none";
}

//Visibilizar

function visibilizarTexto() {
  document.getElementById("mensaje_Uno").style.display = "block";
  document.getElementById("mensaje_Dos").style.display = "block";
  document.getElementById("imagen_no_encontrada").style.display = "block";
  document.getElementById("respuesta").style.display = "none";
  
}

//Ocultar

function ocultarTexto() {
  document.getElementById("mensaje_Uno").style.display = "none";
  document.getElementById("mensaje_Dos").style.display = "none";
  document.getElementById("respuesta").style.display = "block";
  document.getElementById("imagen_no_encontrada").style.display = "none";
  
}

function ocultar_cajas(){
  visibilizarTexto();
  document.getElementById("respuesta").style.display = "none";
  document.getElementById("botonEncriptar").style.display = "none";
}


function desactivar_Boton(nombreBoton) {
  const btnCopiar = document.getElementById(nombreBoton);
  btnCopiar.disabled = true;
}
// Funcion Copy

function copyToClipBoard() {
  respuesta = document.getElementsByTagName("textarea")[1].value;
  if (respuesta == "") {
    visibilizarTexto();
  } else {
    var content = document.getElementById("respuesta");
    content.select();
    document.execCommand("copy");
    alert("Texto Copiado al Portapapeles!");
    limpiarCaja("respuesta");
    window.location.reload();
  }
}

//Funcion Encryptar

function encryptor() {
  var frase = "";
  //frase = prompt("Escribe una frase");
  
  frase = document.getElementsByTagName("textarea")[0].value;
  
  if (frase == "") {
    visibilizarTexto();
   
  } else {
   
    frase = frase
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
    console.log(frase);

    document.getElementById("respuesta").innerHTML = frase;
    limpiarCaja("cajaUno");
  }
}

// Funcion Desencryptar

function decryptor() {
  var frase = "";
  frase = document.getElementsByTagName("textarea")[0].value;

  if (frase == "") {
    visibilizarTexto();
  } else {
    frase = frase
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");

    console.log(frase);
    document.getElementById("respuesta").innerHTML = frase;
  }
}

