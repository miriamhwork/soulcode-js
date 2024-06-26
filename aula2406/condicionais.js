/* Estruturas condicionais (If-Else)

    if (condicao) {
        // instruções caso verdadeiro
    } else {
        // instruções caso falso
    }
*/


let idade = 10;

if (idade > 18) { //bloco se verdadeiro
    console.log("Você é maior de 18 anos!");
} else { //bloco se falso
    console.log("Você é menor de idade!");
}


let media = 5.0;
let sabeIngles = true;
let aprovado = media >= 7.0;

// Só testa se foi aprovado ou não
if (aprovado) { 
    console.log("Parabéns! Você foi aprovado!");
} else {
    console.log("Que pena! Continue tentando!");
}

// Outro teste, porém precisa dos dois com true
if(aprovado && sabeIngles) {
    console.log("Você foi contratado!");
} else {
    console.log("Você não foi contratado!");
}


// Positivo, Negativo ou Zero
let numero = 0;

if(numero > 0) { //caso o n° seja positivo
    console.log("O número" + numero + " é positivo!");
} else if (numero < 0) {
    console.log("O número " + numero + " é negativo!");
} else {
    console.log("O número é zero.")
}



// É par (divisível por 2) ou ímpar (não for divisível por 2)
let n =7;

if (n % 2 == 0) {
    console.log("O número é par!");
} else {
    console.log("O número é ímpar!")
}


// 1 - Domingo, 2 - Segunda, 3 - Terça, .... 7- Sábado
let dia = 4;

if (dia == 1) {
    console.log("Hoje é domingo!");
} else if(dia == 2) {
    console.log("Hoje é segunda!");
} else if(dia == 3) {
    console.log("Hoje é terça!");
} else if(dia == 4) {
    console.log("Hoje é quarta!");
} else if(dia == 5) {
    console.log("Hoje é quinta!");
} else if(dia == 6) {
    console.log("Hoje é sexta!");
} else if(dia == 7) {
    console.log("Hoje é sábado!");
} else {
    console.log("Não existe este dia da semana!")
}

console.log("FIM");
