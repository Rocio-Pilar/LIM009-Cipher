window.cipher = {
  encode: (string, offset) => {
   let nuevaPalabra= '';
   for(let i=0; i<string.length; i++){
    let numeroAssci= string.charCodeAt(i);
    if(65 <= numeroAssci && numeroAssci <= 90){
     nuevaPalabra += String.fromCharCode((numeroAssci-65+offset)%26+65);
    }
    else{
     alert("ingrese las letras en mayúsculas");
    }
    
   };
   return nuevaPalabra;
  },
  

  decode: (string,offset) => {
    let nuevaPalabra= '';
     for(let i=0; i<string.length; i++){
      let numeroAssci= string.charCodeAt(i);
      if(65 <= numeroAssci && numeroAssci <= 90){
       nuevaPalabra += String.fromCharCode((numeroAssci-65-offset)%26+65);
      }
      else{
       alert("ingrese las letras en mayúsculas");
      }
     };
     return nuevaPalabra;
    },

};

//console.log(cipher.encode("A",3));


/*
  
  /*const codigoAssci = msmCapturado.charcodeAt ();
  const nuevoNumeroAssci = (codigoAssci - 65 + OffCapturado) % 26 + 65;
   nuevaLetra += String.fromCharCode(nuevoNumeroAssci)
  console.log(nuevoNumeroAssci)
  console.log(nuevaLetra) 
  msmsalida.innerHTML = nuevaLetra;
}*/


/*function encode (msmCapturado, OffCapturado) {
  const codigoAssci = msmCapturado.charcodeAt ();
  const nuevoNumeroAssci = (codigoAssci - 65 + OffCapturado) % 26 + 65;
  const nuevaLetra = String.fromCharCode(nuevoNumeroAssci)
  console.log(nuevoNumeroAssci)
  console.log(nuevaLetra) 
  msmsalida.innerHTML = nuevaLetra;
  }*/
//decode: () => {
  
//}

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

//window.cipher = {};
 //function encode (msmCapturado, desplazamiento) {
  //const codigoAssci = msmCapturado.charcodeAt ();
  //const nuevoNumeroAssci = (codigoAssci - 65 + desplazamiento) % 26 + 65;
  //const nuevaLetra = String.fromCharcode(nuevoNumeroAssci)
  //return nuevaLetra;
  //console.log(nuevaLetra)
  //msmsalida.innerHTML = nuevaLetra