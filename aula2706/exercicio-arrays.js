// 1. Crie uma função que recebe um array com os nomes dos alunos de uma turma, e outro array que recebe a lista de presença com os nomes. Retorne uma lista com quais alunos faltaram.
function contarAlunos(alunos, presentes) {
    let alunosAusentes = [];
    for(let i = 0; i < alunos.length; i++) {
        if(!presentes.includes(alunos[i])) {
            alunosAusentes.push(alunos[i]);
        }
    }
    return alunosAusentes;
}

let alunos = ["ana", "henrique", "diana", "matheus", "gabriela"];
let presentes = ["henrique", "diana", "gabriela"];
let alunosAusentes = contarAlunos(alunos, presentes);
console.log(alunosAusentes);

// 2. Crie uma função que recebe um array de números e retorna um array com todos os valores elevados ao quadrado.
function elevarQuadrado(numbers) {
    let resultadoQuadrado = [];
    for(let i = 0; i < numbers.length; i++) {
        resultadoQuadrado.push(numbers[i]*numbers[i]);
    }
    return resultadoQuadrado;
}

let numbers = [5, 7, 10, 3, 4, 20];
let resultadoQuadrado = elevarQuadrado(numbers);
console.log(resultadoQuadrado);

// 3. Crie uma função que recebe um array de nomes de arquivos, e recebe também uma extensão, a função deve retornar apenas os nomes de arquivo que forem dessa extensão.
function verificarExtensao(arquivos, extensao) {
    let arquivoVerificado = [];
    for(let i = 0; i < arquivos.length; i++) {
        if (arquivos[i].endsWith(extensao)) {
            arquivoVerificado.push(arquivos[i]);
        }
    }
    return arquivoVerificado
}

let arquivos = ["planta-terreo.pdf", "planta-hidra.dwg", "maquete.png", "orcamento.xls"];
let extensao = "dwg";

let resultado = verificarExtensao(arquivos, extensao);
console.log(resultado);

// 4. Crie um array contendo os números de 1 a 10 e exiba-os no console com for-of e for comum.
let Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i= 0; i < Num.length; i++) {
    console.log(Num[i]);
}

for(let i of Num) {
    console.log(i);
}

// 5. Crie uma função que recebe um array de strings como parâmetro e retorne um novo array apenas com as strings acima de 5 caracteres.
function filtrarCores(cores) {
    let coresFiltradas = [];
    for(let i = 0; i < cores.length; i++) {
        if (cores[i].length > 5) {
            coresFiltradas.push(cores[i]);
        }
    }
    return coresFiltradas;
}

let cores = ["azul", "amarelo", "verde", "branco", "vermelho", "rosa"];
let coresFiltradas = filtrarCores(cores);
console.log(coresFiltradas);

// 6. Crie um array com 7 números. Percorra e indique qual o maior número deles.
function identificarMaiorNum(numA) {
    let maiorNum = numA[0];
    for(let i = 1; i < numA.length; i++) {
        if (numA[i] > maiorNum) {
            maiorNum = numA[i];
        }
    }
    return maiorNum;
}

let numA = [242, 100, 254, 551, 325, 317, 289];
let maiorNum = identificarMaiorNum(numA);
console.log(maiorNum);


// 7. Crie uma função que extrai os dígitos verificadores de um cpf. Ex: "056.985.990-23" -> "23". Retorne apenas os dois últimos dígitos.
function extrairDigitosFinais(CPF) {
    let listaCPF = CPF.split("-");
    console.log(listaCPF); // só pra mostrar o que separou
    console.log(listaCPF[listaCPF.length -1]); // mostra o último elemento
    return
}

let CPF = "056.985.990-23";
let listaCPF = extrairDigitosFinais(CPF);


// 8. Crie uma função que inverte uma string. Retorna ela invertida.
function inverterPalavra(palavraOriginal) {
    console.log(palavraOriginal.split("").reverse("").join(""));
}

let palavraOriginal = inverterPalavra("Diana");


// 9. Escreva uma função que receba uma palavra e um número. Retorne a palavra repetida a quantidade de vezes indicada pelo segundo parâmetro. Exemplo: repetir("batata", 3) -> "batatabatatabatata". OBS: Utilize um loop para resolver.
function identificarMaiorNum(word, nums) {
    let wordRepete = [];
    for(let i = 0; i < nums; i++) {
        if (word[i].length < nums) {
            wordRepete.push(word);
        }
    }
    return wordRepete;
}

let word = "cachorro";
let nums = 3;
let wordRepete = identificarMaiorNum(word, nums);
console.log(wordRepete.join(""));

// 10. Escreva uma função que receba duas strings e retorne true se elas forem iguais ou false caso contrário.
function compararIgualdade(string1, string2) {
    return string1 === string2
}

let string1 = "Pipoca";
let string2 = "Pizza";
console.log(compararIgualdade(string1, string2));

// 11. Crie uma função que recebe um dia, mês e ano dentro de um array. Retorna a data utilizando o separador que também será definido via parâmetros da função (-, / ou .). Ex: formatarData(array, '.') -> '20.06.2000'
function formatarData(dataNumeros){
    let dataFormata = dataNumeros.join("/");
    return dataFormata;
}

let dataNumeros = [11, 4, 1933];
console.log(formatarData(dataNumeros));

// 12. Crie uma função que recebe um array, um valor de busca e um valor padrão. Caso o elemento exista no array retorne o elemento, caso contrário retorne o valor padrão definido via parâmetro. Ex: busca(array, 'batata', 'não tem batata') -> 'não tem batata'
function buscarPalavra(comidas, buscaComida, msgPadrao) {
    if(comidas.includes(buscaComida)) {
        console.log(`Tem ${buscaComida}`);
    } else {
        console.log(msgPadrao);
    }    
}

let comidas = ["batata frita", "hamburguer", "pizza", "hotdog", "lanche de pernil"];
let buscaComida = "hotdog";
let msgPadrao = "Não tem hotdog";
buscarPalavra(comidas, buscaComida, msgPadrao);

// Outra forma, mostra o elemento em um array ->>>
function buscarPalavra(comidas, buscaComida, msgPadrao) {
    let resultadoBuscaComida = [];
    let encontrouComida = false;
    for(let i = 0; i < comidas.length; i++) {
        if (comidas[i] === buscaComida) {
            resultadoBuscaComida.push(comidas[i]); // Corrigido para array[i], não array
            encontrouComida = true;
        } 
    }
    if (!encontrouComida) {
        console.log(msgPadrao);
    }
    return resultadoBuscaComida;
}

let comidas = ["batata frita", "hamburguer", "pizza", "hotdog", "lanche de pernil"];
let buscaComida = "hotdog";
let msgPadrao = "Não tem hotdog";
let resultadoBuscaComida = buscarPalavra(comidas, buscaComida, msgPadrao);
console.log(resultadoBuscaComida);