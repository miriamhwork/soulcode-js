/*
    Funções

    function nome_da_funcao(parametros) {
        // bloco de código da função
    }
*/

// Declarando uma função chamada 'boasVindas'
function boasVindas() { // Escopo da função
    console.log("Seja bem-vindo(a)!");
    console.log("!!!!");
}

//Chamada da função 
// Não tem problema colocar antes da função, pois funciona
boasVindas();

// Exemplo 02
function exemplo02() {
    let a = 5;
    let b = 10;

    console.log(`A soma é ${a + b}`);
}

exemplo02();

// Escopo global 
let num1 = 2;
let num2 = 5;

function exemplo03() {
    console.log(`A soma é ${num1 + num2}`);
}

exemplo03();

//Parâmetros = entrada = o que é necessário para executar
function soma(a, b) {
    console.log(`A soma de ${a} e ${b} é ${a + b}`);
}

soma("10", "8");
soma(33, 4);


// Retorno
function calcularMedia(n1, n2, n3) {
    let resultado = (n1 + n2 + n3) / 3;
    console.log(`A média é ${resultado}`);

    return resultado; // Retorno = saída da função
}

let mediaAluno1 = calcularMedia(7.0, 6.0, 9.0); // o retorno volta pra cá
let mediaAluno2 = calcularMedia(8.0, 10.0, 6.0);
let mediaAluno3 = calcularMedia(8.0, 10.0, 6.0);

// Outro exemplo de retorno
function calcularImc(peso, altura) {
    return peso / (altura * altura);
}

let imc1 = calcularImc(87, 1.78);
let imc2 = calcularImc(50, 1.9);
let imc3 = calcularImc(78, 1.75);

console.log(imc1);
console.log(imc2);
console.log(imc3);
