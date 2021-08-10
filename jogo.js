 
 var altura = 0
 var largura = 0
 var vidas = 1
 var tempo = 10

 var criarMosquitoTempo = 1500

 var nivel = window.location.search
 nivel = nivel.replace('?', '')

 if(nivel === 'normal'){
    criarMosquitoTempo = 1500

 }else if(nivel === 'dificil'){
    criarMosquitoTempo = 1000

 }else if(nivel === 'impossivel'){
    criarMosquitoTempo = 750
    
 }

 function ajustarTamanhoTela() {
    altura = window.innerHeight
    largura = window.innerWidth
 }

 ajustarTamanhoTela()

 var cronometro = setInterval(function() {

    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criarMosquito)
        window.location.href = "vitoria.html"
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }

 }, 1000)

 function posicaoRandomica(){

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if(vidas > 3){
            window.location.href = "fim_de_jogo.html"
        }
        else{
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++
       }
    }

   
    
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoRandomico() + ' ' + ladoRandomico()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    document.body.appendChild(mosquito)
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }


}

function tamanhoRandomico(){

    var tamanho = Math.floor(Math.random() * 3)

    switch(tamanho){
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function ladoRandomico(){

    var lado = Math.floor(Math.random() * 2)

    switch(lado){
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}