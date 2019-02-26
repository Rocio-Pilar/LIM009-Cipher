/* Acá va tu código */
const ocultar = () => {
	const inicio = document.getElementById('inicio');
	inicio.style.display="none";

	const ventana = document.getElementById('ventana');
	ventana.style.display="block";
};
document.getElementById("myBtn").addEventListener("click", ocultar)