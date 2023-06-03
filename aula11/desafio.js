function verificar() {
    var tpais = document.getElementById('country');
    var divNac = document.getElementById('nacionalidade');
    var pais = tpais.value;
    

    divNac.innerHTML = `<p>Nasceu em: <strong>${pais}</strong></p>`
    if (pais.toUpperCase() == 'BRASIL' || pais.toUpperCase() == 'BRAZIL' || pais.toUpperCase() == 'BR') {
        divNac.innerHTML += `<p>Você é Brasileiro</p>`;
    } else {
        divNac.innerHTML += `<p>Você é estrangeiro</p>`
    }
}