let num = [3,6,2,7,5,4];

//num[7] = 100; na posição 7 do array será adicionado o numero 100
//num.push(x); na ultima posição do array sera adicionado o numero x
//num.length; retorna a quantidade de elementos do array
//num.sort(); coloca o array em ordem crescente

console.log(`O Vetor tem ${num.length} posições`); 
console.log(`A primeira posição é ${num[0]}`); 
console.log(`A ordem crescente é ${num} `); 

let pos = num.indexOf(4);
console.log(`O valor 8 está na posição ${pos}`);