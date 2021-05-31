/*Dia: '#e2cd9f'
Tarde: '#b9846f'
Noite: '#515154'*/

function carregar () {
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var linha1 = document.getElementById('linha1')
    var fundo = document.body
    var imagem = document.getElementById('imagem')
    linha1.innerHTML = `Agora são ${hora}:${minuto} horas`

    if (hora >= 5 && hora < 12) { //manha
        fundo.style.backgroundColor = '#e2cd9f'
        imagem.src = "../fotos/manha.png"

    } else if (hora >= 12 && hora <= 18) { // tarde
        fundo.style.backgroundColor = '#b9846f'
        imagem.src = "../fotos/tarde.png"
    } else { //noite
        fundo.style.backgroundColor = '#515154'
        imagem.src = "../fotos/noite.png"
    }
}