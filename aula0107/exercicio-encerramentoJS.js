// 1. Crie uma função arrow que recebe dois números e retorna o maior deles.
const maiorN = (a, b) => {
    if (a > b) {
        console.log(`O número maior é ${a}`);
    } else {
        console.log(`O número maior é ${b}`);
    }
}
maiorN(10, 15);

// 2. Dado um array de palavras, use forEach para imprimir cada palavra com a primeira letra em maiúscula.
let componentes = ["pc", "fone", "teclado", "mouse", "monitor"];
componentes.forEach(index => {
    const primeiraLetra = index.charAt(0).toUpperCase();
    const restoPalavra = index.slice(1);
    console.log(primeiraLetra + restoPalavra);
})

// 3. Use map para transformar um array de números, multiplicando cada número por 5.
const numeros = [1, 7, 2, 3, 5];
const multiplicaPor5 = numeros.map((n) => n*5);
console.log(multiplicaPor5);

// 4. Dado um array de idades, use filter para retornar apenas as idades maiores ou iguais a 18.
let idades = [26, 81, 2, 37, 11, 42, 18, 5, 9, 17, 91];
const maiorIdade = idades.filter((idade) => idade >= 18);
console.log(maiorIdade);

// 5. Dado um objeto representando um livro, que contém título, autor, e um objeto aninhado com informações de publicação (editora, ano), acesse o nome da editora.
let livros = {
    título: "Harry Potter e a Ordem da Fênix",
    autor: "J.K. Rowling",
    infopubli: {
        editora: "Rocco",
        ano: "2015",
        edicao: "1ª edição",
    }
}
console.log(livros.infopubli.editora);

// 6. Crie um array de frutas e use a desestruturação para extrair a primeira e a segunda fruta em variáveis separadas.
let feira = ["mexerica", "laranja", "maçã", "banana", "abacaxi", "caqui", "jabuticaba"];
const separarFrutas = (feira) => {
    const [primeiraFruta, segundaFruta] = feira.slice(0, 2);
    return `${primeiraFruta} e ${segundaFruta}.`
}
console.log(separarFrutas(feira));

// 7. Tente adaptar os exercícios da atividade da semana 03 para utilizar arrow function, forEach, map e filter.
// ------ Exercício 1 ADAPTADO: 

// Escreva uma função que receba um array de números e retorne um novo array contendo apenas os números pares.
const ehPar = (arrayN => {
    return arrayN.filter(numero => numero % 2 === 0);
})
let listagem = [7, 9, 2, 3, 6, 16, 27];
console.log(ehPar(listagem));

// ------ Exercício 2 ADAPTADO: 
// Escreva uma função que receba um array de números e retorne a soma de todos os números.
const somarN = (lista => {
    let resultSoma = 0;
    lista.forEach(n => {
        resultSoma +=n;
    })
    return resultSoma; 
})
let listaN = [ 2, 3, 1, 6, 10, 5];
console.log(somarN(listaN));
// Outra forma:
const somarN2 = (lista) => {
    return lista.reduce((somaN, nListaAtual) => somaN + nListaAtual, 0);
};
let listaN2 = [ 2, 3, 1, 6, 10, 5];
console.log(somarN2(listaN2)); 

// ------ Exercício 3 ADAPTADO:
// Escreva uma função que verifique se uma string é um palíndromo (ou seja, a string é igual quando lida de trás para frente). ARARA -> Palíndromo.
const verificarPalindromo = (str) => {
    let strInvertida = str.split("").reverse().join("");
    return str.toLowerCase() === strInvertida.toLowerCase();
};
console.log(verificarPalindromo("cachorro"));

// ------ Exercício 4 ADAPTADO:
// Escreva uma função que conte o número de vogais em uma string. Dica: Você pode usar um array com todas as vogais possíveis e verificar cada letra da string para ir contando.
const contadorVogais = (string => {
    const vogais = ["a", "e", "i", "o", "u"];
    let qntVogais = 0;
    const palavraLower = string.toLowerCase();
    for(let letra of palavraLower) {
        if(vogais.includes(letra)) {
            qntVogais++;
        }
    }
    return qntVogais;
})
console.log(contadorVogais("Batata frita"));

// ------ Exercício 5 ADAPTADO:
// Escreva uma função que receba um array de números e retorne o menor número do array.
const menorNumero = (arr5) => {
    let nMenor = arr5[0];
    arr5.forEach(x => {
        if(x < nMenor){
            nMenor = x;
        }
    }); 
    return nMenor;
};
let lista5 = [96, 67, 1, 25, 30, 14,];
console.log(menorNumero(lista5));

// ------ Exercício 6 ADAPTADO:
// Escreva uma função que calcule a média dos números em um array. [7.0, 8.0, 9.0] -> (7.0 + 8.0 + 9.0) / 3
const calcularMedia = (nota => {   
    let somaNotas = nota[0];    
    for(let i = 1; i < nota.length; i++) {
        somaNotas = somaNotas + nota[i];
    }
    resultMedia = somaNotas/nota.length;
    return resultMedia.toFixed(2);
})
let notasAluno = [8.5, 3.6, 2.8, 4.5, 9.7];
console.log(calcularMedia(notasAluno));

// Outra forma
const calcularMedia2 = (nota) => {
    const somaNotas = nota.reduce((nSomado, notaAtual) => nSomado + notaAtual, 0);
    const resultMedia = somaNotas / nota.length;
    return resultMedia.toFixed(2);
}
let notaAluno2 = [8.5, 3.6, 2.8, 4.5, 9.7];
console.log(calcularMedia2(notaAluno2)); 

// ------ Exercício 7 ADAPTADO:
// Escreva uma função que conte a frequência de cada caractere em uma string. Dica: use objetos para guardar as contagens de cada caractere.
const contarCaractere = (word => {
    let objLetras = {};
    word.split("").forEach(letter => {
        if(objLetras[letter]) {
            objLetras[letter]++;
        } else {
        objLetras[letter] = 1;
        }
    })
    return objLetras;
})
console.log(contarCaractere("miriam"));

// ------ Exercício 8 ADAPTADO:
// Escreva uma função que recebe um email, e ofusca parte do seu endereço. Por exemplo: jose.almir@dev.com -> j*********@dev.com.
const ofuscarEmail = (email) => {
    const [ emailComeco, emailSeparado ] = email.split("@");
    const emailRecortado = emailComeco.slice(1);
    return emailComeco [0] + "*".repeat(emailRecortado.length) + "@" + emailSeparado;
}
let emailProf = "jose.almir@dev.com";
console.log(ofuscarEmail(emailProf));