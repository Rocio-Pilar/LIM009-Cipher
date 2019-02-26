
const msm = document.getElementById("mensaje");
const offset = document.getElementById("desplazamiento");
const boton = document.getElementById("cifrara");
const msmsalida = document.getElementById("salida");
boton.addEventListener("click", () => {
const msmCapturado = msm.value;
const OffCapturado = offset.value;
//console.log(msmCapturado)
//msmsalida.innerHTML = msmCapturado;
//function encode (msmCapturado, desplazamiento) {
 
  //const desplazamiento = 2;
  const codigoAssci = msmCapturado.charCodeAt();
  //console.log(codigoAssci)
  const nuevoNumeroAssci = (codigoAssci - 65 + OffCapturado) % 26 + 65;
  const nuevaLetra = String.fromCharCode(nuevoNumeroAssci)
  console.log(nuevoNumeroAssci)
  console.log(nuevaLetra) 
  msmsalida.innerHTML = nuevaLetra;
  //console.log(mensajeCapturado)
  
  });




/*const codigoAssci = msmCapturado.charCodeAt();
  const nuevoNumeroAssci = (codigoAssci - 65 + desplazamiento) % 26 + 65;
  const nuevaLetra = String.fromCharCode(nuevoNumeroAssci)
  //return nuevaLetra;
  console.log(nuevoNumeroAssci)
  console.log(nuevaLetra)
  console.log(msmCapturado)
  //msmsalida.innerHTML = nuevaLetra;


 //}
 */
//}); 



/*
//window.cipher = {};
 function encode (msmCapturado, desplazamiento) {
  const codigoAssci = msmCapturado.charcodeAt ();
  const nuevoNumeroAssci = (codigoAssci - 65 + desplazamiento) % 26 + 65;
  const nuevaLetra = String.fromCharcode(nuevoNumeroAssci)
  //return nuevaLetra;
  console.log(nuevaLetra)
  msmsalida.innerHTML = nuevaLetra;


 }
 */
  //decode: () => {
    
  //}