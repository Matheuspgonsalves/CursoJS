function somar() {
    var res = window.document.getElementById('res');
    var tn1 = document.getElementById('txtn1');
    var tn2 = document.getElementById('txtn2');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var soma = n1 + n2;
    res.innerHTML = `${n1} + ${n2} = ${soma}`;
}