function gerar() {
    var tnum = document.getElementById('num')
    var res = document.getElementById('sel')
    var num = Number(tnum.value)

    
    
    res.innerHTML = ``
    
    for(let i = 0; i <= 10; i++) {
        var calculo = num * i
        item = document.createElement('option')
        item.text = `${i} * ${num} = ${calculo}`
        res.appendChild(item)
    }
}