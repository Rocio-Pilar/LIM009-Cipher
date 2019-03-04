/* Acá va tu código */
const ocultar = () => {
	const inicio = document.getElementById('inicio');
	inicio.style.display="none";

	const ventana = document.getElementById('ventana');
	ventana.style.display="block";
};
document.getElementById("myBtn").addEventListener("click", ocultar)

const msm = document.getElementById("mensaje");
const salto = document.getElementById("desplazamiento");
const boton = document.getElementById("cifrara");
const desboton = document.getElementById("descifrar");
const msmsalida = document.getElementById("salida");
boton.addEventListener("click", ()=> {
 const letra = msm.value;
 const numer= parseInt(salto.value);
 const resultado = cipher.encode(letra,numer);
msmsalida.innerHTML= resultado;
});
desboton.addEventListener("click", ()=> {
	const letra = msm.value;
	const numer= parseInt(salto.value);
	const resultado = cipher.decode(letra,numer);
   msmsalida.innerHTML= resultado;
   });
