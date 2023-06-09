let amigo = {nome: 'José',
            sexo: 'M',
            peso: 64,
            engordar(p=0){
                this.peso += p
            }}

amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso}`)
