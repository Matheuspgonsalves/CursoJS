function clicou() {
    var data = new Date();
    var ano = data.getFullYear();
    var nascimento = document.getElementById('ano').value;
    var idade = ano - nascimento;
    var res = document.getElementById('res');
    var fsex = document.getElementsByName('radsex');
    var genero = '';
    var img = document.createElement('img');
    
    
    if (nascimento < 1 || nascimento > ano) {
        window.alert('[Erro] Dados inválidos. Verifique e tente novamente!')
    } else {
        
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade <= 3) {
                //Bebê
                img.setAttribute('src', './img/bebeM.png');
            }else if (idade > 3 && idade <= 12 ) {
                //Criança
                img.setAttribute('src', './img/criancaM.png');
            } else if (idade > 12 && idade <= 20) {
                //Adolescente
                img.setAttribute('src', './img/adolesM.png');
            } else if (idade > 20 && idade <= 50) {
                //Adulto
                img.setAttribute('src', './img/adultoM.png');
            } else {
                //idoso
                img.setAttribute('src', './img/idoso.png');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade <= 3) {
                //Bebê
                img.setAttribute('src', './img/bebeF.png');
            }else if (idade > 3 && idade <= 12 ) {
                //Criança
                img.setAttribute('src', './img/criancaF.png');
            } else if (idade > 12 && idade <= 20) {
                //Adolescente
                img.setAttribute('src', './img/adolesF.png');
            } else if (idade > 20 && idade <= 50) {
                //Adulto
                img.setAttribute('src', './img/adultoF.png');
            } else {
                //idoso
                img.setAttribute('src', './img/idosa.png');
            }
        }
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}