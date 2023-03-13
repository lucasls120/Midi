function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
    if (elemento && elemento.localName === 'audio') {
        elemento.play()
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//let contador = 0;
// estrutura while
//while(contador < listaDeTeclas.length){
    
    //const tecla = listaDeTeclas[contador];
    //const instrumento = tecla.classList[1];
    //const idAudio = `#som_${instrumento}`;
    
    //console.log(idAudio);
    
    //tecla.onclick = function(){
      //  tocaSom(idAudio);
    //}

   //contador = contador + 1;

   //console.log(contador);
//}   
// estrutura for
for(let contador = 0; contador < listaDeTeclas.length; contador ++){
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function(){
        tocaSom(idAudio);
    }    

    tecla.onkeydown = function (evento){

         console.log(evento.code === 'Space')
    
       if (evento.code === 'Space' || evento.code === 'Enter')
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }

}