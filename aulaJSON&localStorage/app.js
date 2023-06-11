function leDados() {
    let strDados = localStorage.getItem('db')
    let objDados = {}
    
    if(strDados) {
        objDados = JSON.parse(strDados)
    }else {
        objDados = {contatos: [
                {nome: 'Matheus Pereira', telefone: '31-99586-4397'}, {nome: 'Giulia Eduarda', telefone: '31-99486-4237'}, {nome: 'Breno Erick', telefone: '31-99346-2343'}
            ]
        }
    }

    return objDados;
}

function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados))
}

function incluirContato() {
    //Ler os dados do localStorage
    let objDados = leDados()

    //Incluir um novo contato
    let strNome = document.getElementById('campoNome').value
    let strTel = document.getElementById('campoTel').value
    let novoContato = {
        nome: strNome,
        telefone: strTel
    }
    objDados.contatos.push(novoContato)

    //Salvar os dados no localStorage
    salvaDados(objDados)

}   

function imprimeDados() {
    let tela = document.getElementById('tela')
    let strHTML = ''
    let objDados = leDados()

    for (let i = 0; i < objDados.contatos.length; i++) {
        strHTML += `<p>${objDados.contatos[i].nome} - ${objDados.contatos[i].telefone}</p>`
    }

    tela.innerHTML = strHTML
}


//Configura os botoes
document.getElementById('carDados').addEventListener('click', imprimeDados)
document.getElementById('incluir').addEventListener('click', incluirContato)
