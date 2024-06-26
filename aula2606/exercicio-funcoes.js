// 1. Crie uma função para calcular e retorna o IMC, e outra função que recebe o valor de IMC e indica o status no terminal.
function calculaImc(peso, altura){
    return peso / (altura* altura);
}

function statusImc(imc) {
    if(imc < 17) {
        console.log("Muito abaixo do peso.");
    } else if (imc >= 17 && imc <= 18.49) {
        console.log("Abaixo do peso");
    } else if (imc >= 18.5 && imc <= 24.99) {
        console.log("Peso normal");
    } else if(imc >= 25 && imc <= 29.99) {
        console.log("Acima do peso");
    } else if(imc >= 30 && imc <= 34.99) {
        console.log("Obesidade I");
    } else if(imc >= 35 && imc <= 39.99) {
        console.log("Obesidade II (severa)");
    } else if(imc >= 40) {
        console.log("Obesidade III (mórbida)");
    }
}

let imc = calculaImc(59, 1.57);
statusImc(imc);


// 2. Crie uma função que recebe um número (PARÂMETRO) de 0 a 1. E RETORNA em porcentagem: percentual(0.456) -> 45.6%
function porcentagem(n) {
    return n * 100
}

let percentual = porcentagem(0.45);
console.log(`${percentual}%`);


// 3. Crie uma função que recebe um número (PARÂMETRO). E RETORNA se ele é negativo (true ou false). Ex: ehNegativo(-2) ===> true
function negativo(n) {
    return n < 0 
}

let n = negativo(-2);
console.log(n);


// 4. Crie uma função que conte até um número passado por parâmetro. Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000. OBS: Não possui retorno.
function contarNum(x) {
    for(let c = 1; c <= x ; c++) {
        console.log(c);
    }
}

contarNum(100);


// 5. Crie uma função que recebe um nome e sobrenome. RETORNA o nome completo como resultado.
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`
}

let resultado = nomeCompleto("Miriam", "Hirose");
console.log(resultado);


// 6. Crie uma função para calcular a área de um circulo = PI * R * R. Considere PI = 3.14.
// 7. Crie uma função que recebe a área de um circulo e mostra o nível:
// Entre 1 e 20 => Nível I
// Entre 21 e 40 => Nível II
// Qualquer outro diâmetro => Nível inválido
function calculaArea(r) {
    let pi = 3.14;
    return (pi * r * r);    
}

function nivelArea(areaCirculo) {
    if(areaCirculo >= 1 && areaCirculo <= 20) {
        console.log("Nível I");
    } else if (areaCirculo >= 21 && areaCirculo <= 40) {
        console.log("Nível II");
    } else {
        console.log("Nível inválido");
    }
}

let areaCirculo = calculaArea(3);
nivelArea(areaCirculo);

// 8. Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas.
function converter(letraM) {
    let letraMaiusc = letraM.toLowerCase();
    console.log(letraMaiusc)
}

converter("AAAA");
converter("BBBB");


// 9. Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string.
function recebeString(string, caractere){
    let contador = 0
    for (let i = 0; i < string.length; i++) {
        if (string [i] === caractere) {
            contador++;
        }
    }
    return contador;
}

let resulCont = recebeString("miriam", "i");
console.log(resulCont);