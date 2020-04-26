//importa const cipher desde cipher.js
import cipher from './cipher.js';
//llamando a setNombre y devolviendolo en sec2(nombre de usuario)
document.getElementById("aceptar").addEventListener("click", nombreUsuario);
function nombreUsuario() {
  var nombre = document.getElementById("nombre").value;
  document.getElementById("saludo").innerHTML = "Chat privado con" + " " + nombre;
}
//Se declara variables de texto, clave y result y se le da funcionalidad
//al boton Cifrar
var texto = document.getElementById("text").value;
var clave = document.getElementById("shift").value;
var result;
cipher.encode(texto,clave);
document.getElementById("btnEncode").addEventListener("click",() => {
  texto = document.getElementById("text").value;
  clave = parseInt(document.getElementById("shift").value);
  result = cipher.encode(texto, clave);
  document.getElementById("text").value = result;
});

//Se da funcionalidad al boton para Descifrar
cipher.decode(texto,clave) 
document.getElementById("btnDecode").addEventListener("click",() => {
  texto = document.getElementById("text").value;
  clave = parseInt(document.getElementById("shift").value);
  result = cipher.decode(texto, clave);
  document.getElementById("text").value = result;
});

document.getElementById("enviar-uno").addEventListener("click", sendMensaje);
function sendMensaje() {
  var mensaje = document.getElementById("text").value;
  document.getElementById("text-dos").innerHTML = mensaje;
}
