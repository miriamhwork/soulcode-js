// 1. Escreva um programa que inverte uma string
let palavra = "macarrão";
let palavraInvertida = "";

for(let i = palavra.length - 1; i >= 0; i--) { 
    palavraInvertida = palavraInvertida + palavra[i]
}
console.log(palavraInvertida);

// 2. Crie uma variável que armazena uma frase, e utilize as funcionalidades de string para remover uma palavra específica da frase e trocar por "###"
let frase = "Hoje teremos estrogonofe no almoço";
console.log(frase.replace("estrogonofe","###"));


// 3. Crie uma variável que armazena um email, o programa deve indicar se este email é do domínio soulcode.com
let email = "miriam@soulcode.com"

if(email.includes("soulcode.com")) {
    console.log("Este é um e-mail com domínio da Soulcode");
} else {
    console.log("Este não é um e-mail com domínio da Soulcode");
}
