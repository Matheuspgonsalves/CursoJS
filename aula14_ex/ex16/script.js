function verificar() {
    let init = document.getElementById('init')
    let end = document.getElementById('end')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    let i = Number(init.value)
    let e = Number(end.value)
    let p = Number(passo.value)
    
    if (i == 0 || e == 0) {
        alert('[ERRO]Faltam dados!')
    } else if (i < e){
        res.innerHTML = `Contando: `

        for (let c = i; c <= e; c += p) {
            res.innerHTML += `${c} `
        }
    } else {
        res.innerHTML = `Contando: `

        for (let c = i; c >= e; c -= p) {
            res.innerHTML += `${c} `
        }
    }

    
}
