let vetor = [8,5,4,6,0,2,10];

for (let i = 0; i < vetor.length; i++) {
    console.log(`A posição ${i} têm o valor ${vetor[i]}`);
}

for (let i in vetor) {
    console.log(`A posição ${i} têm o valor ${vetor[i]}`);
}