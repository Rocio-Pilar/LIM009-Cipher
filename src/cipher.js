window.cipher = {
  encode: (string, offset) => {
   let nuevaPalabra= '';
   for(let i=0; i<string.length; i++){
    let numeroAssci= string.charCodeAt(i);
    if(65 <= numeroAssci && numeroAssci <= 90){
     nuevaPalabra += String.fromCharCode((numeroAssci-65+offset)%26+65);
    }
    if(97 <= numeroAssci && numeroAssci <= 122){
      nuevaPalabra += String.fromCharCode((numeroAssci-97+offset)%26+97);
     }
   }
   return nuevaPalabra;
  },
  decode: (string,offset) => {
    let nuevaPalabra= '';
     for(let i=0; i<string.length; i++){
      let numeroAssci= string.charCodeAt(i);
      if(65 <= numeroAssci && numeroAssci <= 90){
       nuevaPalabra += String.fromCharCode((numeroAssci-90-offset)%26+90);
      }     
      if(97 <= numeroAssci && numeroAssci <= 122){
        nuevaPalabra += String.fromCharCode((numeroAssci-122+offset)%26+122);
       }                                                             
     }
     return nuevaPalabra;
    },
}