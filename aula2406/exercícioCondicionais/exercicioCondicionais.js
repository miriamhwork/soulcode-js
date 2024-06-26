/* 1. Defina 3 variáveis com notas de 0 a 10. Calcule a média das três notas. Em seguida mostre no console o status do aluno:
Maior ou igual 7 = Aprovado
Entre 5 e 7 = Reforço
Menor que 5 = Reprovação
*/

let nota1 = 9.5;
let nota2 = 1.2;
let nota3 = 4.6;

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log("Sua média é " + media + ". Você foi aprovado!")
} else if (media >=5 && media < 7) {
    console.log("Sua média é " + media + ". Você precisa de reforço!")
} else if (media < 5) {
    console.log("Sua média é " + media + ". Você foi reprovado!")
}

/* 2. Simule a tabela do IMC com base no valor calculado pela formula: IMC = PESO / (ALTURA x ALTURA).
Indique o status com base no valor do IMC.
*/

let altura = 1.57;
let peso = 59;

let IMC = (peso / (altura)**2).toFixed(2);

if (IMC < 17) {
    console.log("Seu IMC é " + IMC + ". Você está muito abaixo do peso.");
} else if (IMC >= 17 && IMC <= 18.49) {
    console.log("Seu IMC é " + IMC + ". Você está abaixo do peso.");
} else if (IMC >= 18.5 && IMC <= 24.9) {
    console.log("Seu IMC é " + IMC + ". Você está com o peso normal.");
} else if (IMC >= 25 && IMC <= 29.9) {
    console.log("Seu IMC é " + IMC + ". Você está acima do peso.");
} else if (IMC >= 30 && IMC <= 34.9) {
    console.log("Seu IMC é " + IMC + ". Você está com obesidade grau 1.");
} else if (IMC >= 35 && IMC <= 39.9) {
    console.log("Seu IMC é " + IMC + ". Você está com obesidade grau 2.");
} else if (IMC > 40) {
    console.log("Seu IMC é " + IMC + ". Você está com obesidade grau 3.");
}

/* 3. Defina um número a e um número b. Verifica qual o maior, ou menor, ou se são iguais! */

let a = 51;
let b = 51;

if (a > b ) {
    console.log("O número " + a + " é maior que " + b);
} else if (a < b) {
    console.log("O número " + a + " é menor que " + b);
} else if (a == b) {
    console.log("Os números " + a + " e " + b + " são iguais.");
}

/* 4. Crie duas variáveis: salário e quantidadeDependentes. Siga a seguinte regra para aplicar ajustes salariais: Caso não possua dependentes não realizar ajustes no salário, se houver entre 1 e 5 aumentar em 30% o salário. Caso seja acima de 5 aumentar em 40% o salário. */

let salario = 1200;
let quantDependentes = 1;

if (quantDependentes == 1 || quantDependentes <= 5) {
    let aumento30 = (salario * 0.3) + salario
    console.log("Você teve 30% de aumento e agora seu salário é de " + aumento30 + " reais.")
} else if (quantDependentes > 5) {
    let aumento30 = (salario * 0.4) + salario
    console.log("Você teve 40% de aumento e agora seu salário é de " + aumento30 + " reais.")
} else if (quantDependentes === 0) {
    console.log ("Você não teve aumento.")
}

/* 5. Crie uma variável para armazenar um dia da semana (1 - Domingo, 2 - Segunda, ... 7 - Sábado). Com base no valor indique se é final de semana ou dia útil.
*/

let dia = 1;

if (dia >= 2 && dia <= 6) {
    console.log("Hoje é um dia útil.")
} else if (dia <= 1 || dia == 7) {
    console.log("Hoje é final de semana.")
} else {
    console.log("O valor não é um dia válido.")
}

/* 6. Crie uma variável ano e verifique se este ano é bissexto. Um ano é bissexto quando: 
Caso 1) É um número divisível por 4, mas não é divisível por 100. 
Caso 2) É um número divisível por 4, por 100 e por 400.
*/

let ano = 2025;
let div4 = ano % 4;
let div100 = ano % 100;
let div400 = ano % 400;


if (div4 == 0 && div100 > 0 ) {
    console.log("Este ano é bissexto");
} else if (div400 == 0) {
    console.log("Este ano é bissexto")
} else {
    console.log("Este não é um ano bissexto.")
}

/* 7. Crie uma variável idade. Caso seja uma idade inválida (negativa ou maior que 130) mostre uma mensagem de aviso.
*/

let idade = 131;

if (idade < 0 || idade > 130) {
    console.log("Digite uma idade válida entre 0 e 130!")
} else {
    console.log("Idade válida.")
}

/*8. Crie uma variável com o turno de aula: M-matutino ou V-Vespertino ou N- Noturno. Mostre a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
*/

let turno = "N";

if (turno === "M") {
    console.log("Bom Dia!")
} else if (turno === "V") {
    console.log("Boa tarde!")
} else if (turno === "N") {
    console.log("Boa noite!")
} else {
    console.log("Valor inválido!")
}
