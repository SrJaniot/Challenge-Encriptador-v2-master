function mostrarpantallaencriptado (){



    let tamañotext = document.getElementById('textArea1').value.length;


    if (document.getElementById('conteiner2').style.display==='none' && tamañotext>0 ) {
        
        document.getElementById('conteiner2').style.display='flex';
        document.getElementById('conteiner3').style.display='none';
        
    
    }else{
        swal("No hay texto", "Porfavor digite su texto", "error");
    }
    if (document.getElementById('conteiner2').style.display==='flex') {
        swal( {
            icon: 'Imagenes/nico-robin.gif',
            title:'Encriptado...',
            timer: 1500,
          });
         setTimeout(encriptar,1500)
        
    }
    

    

  
   


}
function mostrarpantalladesencriptado (){

    let tamañotext = document.getElementById('textArea1').value.length;


    if (document.getElementById('conteiner2').style.display==='none' && tamañotext>0 ) {
        
        document.getElementById('conteiner2').style.display='flex';
        document.getElementById('conteiner3').style.display='none';
        
    
    }else{
        swal("No hay texto", "Porfavor digite su texto", "error");
    }
    if (document.getElementById('conteiner2').style.display==='flex') {
        swal( {
            icon: 'Imagenes/poneglif.gif',
            title:'Desencriptando...',
            timer: 1500,
          });
          setTimeout(desemcriptar,1500)
        
    }
    
      

  
  


}


function copiar() {
    var miTextarea = document.getElementById("textArea2");
    miTextarea.select();
    document.execCommand("copy");
    swal({
        icon: "success",
        title:'Copiado',
        timer: 1000,
      });

    
}




function desemcriptar (){
    let textarea1 =document.getElementById('textArea1');
    let texto=textarea1.value;
    

    
    let texto2 =document.getElementById('textArea2');
    let textocodigicado = texto
    
    .replace(/enter/gi,"e")
    .replace(/imes/gi,"i")
    .replace(/ober/gi,"o")
    .replace(/ufat/gi,"u")
    .replace(/ai/gi,"a");

    if (texto.length !=0) {
        texto=textocodigicado;
        texto2.value=textocodigicado
    }
}

function encriptar (){
    let textarea1 =document.getElementById('textArea1');
    let texto=textarea1.value;
    

    
    let texto2 =document.getElementById('textArea2');
    let textocodigicado = texto
    
    .replace(/e/gi,"enter")
    .replace(/i/gi,"imes")
    .replace(/o/gi,"ober")
    .replace(/u/gi,"ufat")
    .replace(/a/gi,"ai");

    if (texto.length !=0) {
        texto=textocodigicado;
        texto2.value=textocodigicado
    }

    
}