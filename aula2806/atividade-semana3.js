// # Exercício 1: Escreva uma função que receba um array de números e retorne um novo array contendo apenas os números pares.
// Raciocínio: Criei a função para verificar se a divisão por dois tem resto zero. Se sim, ele coloca esse valor no novo array 'numPares' e me retorna o array.

function ehPar(arrayN) {
    let numPares = [];
    for(let numero of arrayN) {
        if(numero%2 == 0) {
            numPares.push(numero);
        }
    }
    return numPares;
}

let listagem = [7, 9, 2, 3, 6, 16, 27];

let numPares = ehPar(listagem);
console.log(numPares);

// # Exercício 2: Escreva uma função que receba um array de números e retorne a soma de todos os números.
// Raciocínio: Queria somar o índice atual com o próximo índice e mostrar isso numa nova lista. Por isso, iniciei a nova lista já com o índice 0 da lista e o loop do for com o segundo item i = 1. Dessa forma, ele já soma os dois primeiros índices no 1º loop. E a cada loop a nova lista é a soma desses índices.
function somarN(lista) {
    let resultSoma = lista[0];
    
    for(let i = 1; i < lista.length; i++) {
        resultSoma = resultSoma + lista[i];
    } 
    return resultSoma;
    
}

let listaN = [ 23, 56, 41, 96, 16, 73];
console.log(somarN(listaN));


// # Exercício 3: Escreva uma função que verifique se uma string é um palíndromo (ou seja, a string é igual quando lida de trás para frente). ARARA -> Palíndromo.
// Raciocínio: Primeiro inverti a palavra e depois verifiquei se ela é igual à palavra original (antes de inverter).

function verificarPalindromo() {
    let palavra = "cachorro";
    let invertida = "";

    for(let i = palavra.length - 1; i >= 0; i--) { 
        invertida = invertida + palavra [i]
        console.log(invertida);
    }

    if (invertida === palavra) {
        console.log(`A palavra ${palavra} é um palíndromo!`)
    } else{
        console.log(`A palavra ${palavra} não é um palíndromo, pois ela invertida fica ${invertida}!`) // Fiz assim para mostrar se a inversão da palavra deu certo no for
    }
}

verificarPalindromo();

// # Exercício 4: Escreva uma função que conte o número de vogais em uma string. Dica: Você pode usar um array com todas as vogais possíveis e verificar cada letra da string para ir contando.
// Raciocínio: Me baseei no exercício 9 de funções do dia 26/06 em que fizemos um contador. Pensei em adicionar no IF a verificação se cada caractere da string estivesse dentro do array, iria somar +1 ao contador. Para facilitar meu entendimento, deixei um console.log no código para imprimir quantas vezes o laço do FOR passava e se estava contando certo.

function contadorVogais(string, vogais) {
    let qntVogais = 0;

    for(let letra of string) {
        if(vogais.includes(letra)) {
            console.log(`Tem a letra ${letra} na palavra ${string}`); // criei esta linha apenas para testar se o IF estava funcionando corretamente
            qntVogais++;
        }
    }
    return qntVogais;
}

let listaVogais = ["a", "e", "i", "o", "u"];
let palavra = "Batata frita";

console.log(contadorVogais(palavra, listaVogais));


// # Exercício 5: Escreva uma função que receba um array de números e retorne o menor número do array.
// Raciocínio: Parecido com a estrutura do exercício 2, igualei o resultado final (nMenor) com o valor do índice 0 da lista para iniciar a comparação com o índice 1 da lista (let i = 1). No loop, enquanto o índice  for menor que nMenor, este será o novo número menor.
function menorNumero(arr5) {
    let nMenor = arr5[0];
    
    for(let i = 1; i < arr5.length; i++) {
        if(arr5[i] < nMenor){
            nMenor = arr5[i];
        }
    } 
    return nMenor;
    
}

let lista5 = [96, 67, 1, 25, 30, 14,];
console.log(menorNumero(lista5));

// # Exercício 6: Escreva uma função que calcule a média dos números em um array. [7.0, 8.0, 9.0] -> (7.0 + 8.0 + 9.0) / 3
// Raciocínio: Mesmo raciocínio do exercício 2, complementando com: após chegar no comprimento total do array e somar todos os índices, dividir pelo tamanho total do array para mostrar a média.
function calcularMedia() {    
    for(let i = 1; i < nota.length; i++) {
        somaNotas = somaNotas + nota[i];
    }
    
    resultMedia = somaNotas/nota.length;
    
    console.log(resultMedia.toFixed(2));
}

let nota = [8.5, 3.6, 2.8, 4.5, 9.7]; //corrigido
let somaNotas = nota[0]; //corrigido
calcularMedia();

// # Exercício 7: Escreva uma função que conte a frequência de cada caractere em uma string. Dica: use objetos para guardar as contagens de cada caractere.
// Raciocínio: Criei as variáveis primeiro para separar cada caractere da palavra e a lista de objetos (iniciando vazia). Criei o loop, cada caractere que verificar e a lista de objetos tiver o caractere verificado, vai somar +1 na contagem. Se for um caractere diferente, só fixa a contagem em 1.

function contarCaractere(word) {
    let palavraFragmentada = word.split("");
    // console.log(palavraFragmentada); Coloquei esta linha para ver a palavra cortada

    let objLetras = {};

    for (letter of palavraFragmentada) {
        if(objLetras[letter]) {
            objLetras[letter]++;
        } else {
        objLetras[letter] = 1;
        }
    }
    return objLetras;
}

let palavraEscolhida = "miriam";
console.log(contarCaractere(palavraEscolhida));

// # Exercício 8: Escreva uma função que recebe um email, e ofusca parte do seu endereço. Por exemplo: jose.almir@dev.com -> j*********@dev.com.
// Raciocínio: Tentei primeiro criar as variáveis: separar o email, selecionar a primeira parte dividida antes do @, recortar a primeira letra e depois substituir por ***. Pensei em concatenar tudo em um console.log. Depois de dar certo, coloquei tudo dentro da função. Funcionou, mas não sei se essa é a solução mais viável.
function ofuscarEmail(email) {
    let emailSeparado = email.split("@"); // Dividir o email em 2 pelo @
    let emailComeco = emailSeparado[0]; // Pegar a primeira parte do email antes do @
    let emailRecortado = emailComeco.slice(1); // Recortar a primeira letra do email
    let parteOculta = "*".repeat(emailRecortado.length); // Substitui os caracteres por ****
    
    console.log(emailComeco[0] + parteOculta + "@" + emailSeparado[1]);    
}

let emailProf = "jose.almir@dev.com";
ofuscarEmail(emailProf);





