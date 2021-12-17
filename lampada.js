const ligado = document.getElementById ( 'ligado' );
const desligado = document.getElementById ( 'desligado' );
const lamp = document.getElementById ( 'lamp' )

function lampOn () { /*Criando função de deixar a lâmpada ligada*/
    if ( !isLampBroken () ) 
    lamp.src = "img/ligada.jpg";
}

function lampOff () { /*Criando função de deixar a lâmpada ligada*/
    if ( !isLampBroken () ) 
    lamp.src = "./img/desligada.jpg";
}

function lampBroken () { /*Criando função para mostrar img da lâmpada
quebrada*/
    lamp.src = "./img/quebrada.jpg";
}

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}


ligado.addEventListener ( 'click', lampOn ); /*infomando ao código que 
ao clicar se iniciará o evento lampOn - ligar a lâmpada*/

desligado.addEventListener ( 'click', lampOff ); /*infomando ao código que 
ao clicar se iniciará o evento lampOn - ligar a lâmpada*/

lamp.addEventListener ( 'mouseover', lampOn ); /*Lâmpada liga ao passar o 
mouse*/

lamp.addEventListener ( 'mouseleave', lampOff ); /*Lâmpada desliga ao
passar o mouse*/

lamp.addEventListener ( 'dblclick', lampBroken ); /*Lâmpada se quebra 
no duplo clique*/