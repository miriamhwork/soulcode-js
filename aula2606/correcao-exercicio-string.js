// 1. Escreva um programa que inverte uma string
let palavra = "Batata";
let invertida = "";

// tem que iniciar do último caractere por isso palavra.length - 1
// 
for(let i = palavra.length - 1; i >= 0; i--) { 
    invertida = invertida + palavra [i]
}
console.log(invertida);

// 2. Crie uma variável que armazena uma frase, e utilize as funcionalidades de string para remover uma palavra específica da frase e trocar por "###"
let frase = "Eu jogo LOL e Valorante, LOL é top";
let fraseCensurada = frase.replaceAll("LOL", "###");

console.log(fraseCensurada);

// 3. Crie uma variável que armazena um email, o programa deve indicar se este email é do domínio soulcode.com
const emailProf = "professor@soulcode.com";

// includes ou endsWith
if(emailProf.endsWith("soulcode.com")) {
    console.log("Este e-mail pertence a Soulcode");
} else {
    console.log("Este e-mail não pertence a SoulCode!");
}
