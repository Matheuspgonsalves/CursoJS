function verificar() {
    var IVel = document.getElementById('vel');
    var vel = Number(IVel.value);
    var res = document.getElementById('res');

    res.innerHTML = `<p>Velocidade atual: <strong>${vel}</strong> Km/h</p>`;

    if (vel > 60) {
        res.innerHTML += `<p>Velocidade máxima acima do permitido, você está sendo <strong>MULTADO</strong>!</p>`;
    } else {
        res.innerHTML += `<p>Dirija sempre com segurança.</p>`;
    }
}