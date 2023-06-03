var a = window.document.getElementById('area');
a.addEventListener('click', clicar);
a.addEventListener('mouseenter', entrou);
a.addEventListener('mouseout', sair);

function clicar() {
    a.innerText = 'Clicou';
    a.style.background = 'Blue';
}

function entrou() {
    a.innerText = 'Entrou';
    a.style.background = 'Red';
}

function sair() {
    a.innerText = 'Saiu';
    a.style.background = 'Green';
}