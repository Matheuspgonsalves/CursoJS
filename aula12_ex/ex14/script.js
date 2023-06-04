function carregar() {
var data = new Date();
var hora = data.getHours(); //vai receber a hora real e atual.
var divTime = document.getElementById('time');
var divImg = document.getElementById('img');


divTime.innerHTML = `Agora são ${hora} horas`;

if (hora >= 5 && hora <= 11) {
    divTime.innerHTML += `<p><strong>Bom dia!</strong></p>`
    divImg.innerHTML = `<img src="./img/manha.png" alt="Imagem do nascer do Sol">`
    document.body.style.background = 'rgb(255, 190, 122)'
} else if (hora >= 12 && hora <= 17) {
    divTime.innerHTML += `<p><strong>Boa tarde!</strong></p>`
    divImg.innerHTML = `<img src="./img/tarde.png" alt="Imagem do nascer do Sol">`
    document.body.style.background = '#7393b1'
} else if (hora >= 18 && hora <= 24) {
    divTime.innerHTML += `<p><strong>Boa noite!</strong></p>`
    divImg.innerHTML = `<img src="./img/noite.png" alt="Imagem do nascer do Sol">`
    document.body.style.background = '#011c39'
} else {
    divTime.innerHTML += `<p><strong>Boa madrugada!</strong></p>`
    divImg.innerHTML = `<img src="./img/madruga.png" alt="Imagem do nascer do Sol">`
    document.body.style.background = '#000812'
}

}