// Strings = cadeias de caracteres

const nome = "Almir";
const sobrenome = 'Batata';

// Interpolação de string
const nomeComplet = `${nome} ${sobrenome}`;

console.log(nomeCompleto);

// Formação de strings
let meuPEt = "Fred";
// 0 -> "F",
// 1 -> "r",
// 2 -> "e",
// 3 -> "d"

let comida = "Batata Assada"; // índice de 0 até 12
console.log(comida [0]); // B
console.log(comida [1]); // a
console.log(comida [2]); // t
console.log(comida [6]); // espaço em branco
console.log(comida [6]); // a -> último caractere
console.log(comida [500]); // undefined = não existe essa posição na string

// Tamanho da string
console.log(comida.length); // total de caracteres da string
console.log(comida[comida.length - 1]); // último caractere da string

// Percorrendo a string caractere por caractere
for(let i = 0; i < comida.length; i++) { 
// i para índice começa em 0, enquanto i for menor que o tamanho total da string vai rodar o programa
    console.log(comida[i]); // mostra um caractere por vez
}

// Funções de string
let palavra = "JavaScript";
console.log(palavra.toLowerCase()); // Minúscula
let palavraMin = palavra.toLowerCase(); // gera um novo texto com a mudança que você fez

console.log(palavra.toLocaleUpperCase()); // Maiúscula
// não aceita parâmetros dentro do (), porque o toUpperCase e toLowerCase são funções mais simples

console.log(palavra.charAt(0)); // palavra[0]

console.log(palavra.replace("Java", "Type")); // Tem que ser o caractere exato, minúsculo e maiúsculo ele difere
console.log(palavra.replace("a", "R")); //aqui ele substitui apenas o primeiro "a" que aparece pelo "R"
console.log(palavra.replaceAll("a", "x")); //aqui ele substitui todos os "a" por "x" 


// Verifica se tem ou não um caractere e dá um resultado boolean
let frase = "Eu comi arroz, feijão, batata e carne";
console.log(frase.includes("carne")); // verifica se possui o elemento na variável

if(frase.includes("alface")) {
    console.log("Muito bem!");
} else {
    console.log("Coma algo mais saudável!");
}


// Verifica se termina ou começa com um caractere e dá um resultado boolean
let arquivo = "musica.mp3";
console.log(arquivo.endsWith("mp3")); // verifica se termina com 'mp3'
console.log(arquivo.endsWith("mp4")); // verifica se termina com 'mp4'
console.log(arquivo.startsWith("mus")); // verifica se começa com 'mus'


// Slice
// o índice inicial para fazer o corte e o índice final (mas considere um índice a mais para considerar)
let produto = "computador";
console.log(produto.slice(0,3)); // aqui ele vai do índice 0 e até o 2, não vem o 3