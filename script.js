
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')  
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<p>Agora são <strong>${hora} horas.</strong></p>`
    if(hora >= 0 && hora < 12){
        //bom dia novinha
        msg.innerHTML = `<p>Agora são <strong>${hora} horas da manhã.</strong></p>`
        img.src = 'imagens/manha.jpeg'
        document.body.style.backgroundColor= '#27A1E5'
    } else if(hora >= 12 && hora < 18) {
        //boa tarde man, vai um cafezinho?
        msg.innerHTML = `<p>Agora são <strong>${hora} horas da tarde.</strong></p>`
        img.src = 'imagens/tarde.jpeg'
        document.body.style.backgroundColor= '#FB902C'
    } else if(hora >= 18 && hora < 24){
        //boa noite garai dorme bem menor
        msg.innerHTML = `<p>Agora são <strong>${hora} horas da noite.</strong></p>`
        img.src = 'imagens/noite.jpeg'
        document.body.style.backgroundColor = 'gray'
    } else if(hora > 24 ){
        //so pros metido

        var te = document.getElementById('so pra quem quebrar a estrutura do tempo-espaço')
        img.src = 'imagens/espaco.jpg'
        document.body.style.backgroundColor = 'black'
        te.innerHTML= 'TU ME BUGOU!!'
        msg.innerHTML=`Você acabou de quebrar o <STRONG>espaço-tempo</STRONG>. Como vc conseguiu??? <strong>são ${hora} horas</strong>`
    }
}