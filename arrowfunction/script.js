//Arrow function

// (a,b) => {
//     return a+b;
// }

// (a,b) => a+b

let num1 = 7;
let num2 = 10;

let c = (a, b) => num1 + num2;

console.log(c(num1,num2));

let d = (x,y) => {
let op;

    if(x>5) {
        op = x*y;
    } else {
        op = x/y;
    }
    return op;
}

console.log(d(num1,num2));

//Um argumento

let frase = 'O Matheus é um ótimo dev';
let fraseArray = (frase) => frase.split(' ');