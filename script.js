function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.querySelector('img#imagem')
    // var data = new Date()
    // var hora = data.getHours()
    var hora  = 16
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) { //Manha
        foto.src = 'manha.png'
        window.document.body.style.background = '#fdcfaf'
    }
    else if (hora >= 12 && hora <= 18){ //Tarde
        foto.src = 'tarde.png'
        document.body.style.background = '#8b4c2c'
    }
    else { //Noite
        foto.src = 'noite.png'
        document.body.style.background = '#354b4e'
    }

}