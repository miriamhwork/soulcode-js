// Objetos = servem para estruturar dados
/*
    let variavel = { 
        propriedade1 : valor1,
        propriedade2 : valor2,
        propriedade3 : valor3
    }
*/

// nome, idade, peso, altura (propriedades do objeto)
let pessoa1 = {
    nome: "José", 
    idade: 29,
    peso: 70.5,
    altura: 1.75
};

let pessoa2 = {
    nome: "Maria", 
    idade: 30,
    peso: 65.0,
    altura: 1.70
};

// Acesso de propriedade
console.log(pessoa1.nome);
console.log(pessoa2.idade);
console.log(pessoa1["peso"]);
console.log(pessoa2["altura"]);
pessoa1["email"] = "jose@email.com";

// Adicionando propriedades ao objeto
pessoa1["email"] = "jose@email.com";
console.log(pessoa1);

// Alterando valores nas propriedades
// Funciona das duas formas abaixo e pode incrementar e decrementar
pessoa1.idade = 40;
pessoa2["idade"] +=5;

console.log(pessoa1.idade);
console.log(pessoa2.idade);

// Removendo propriedades
delete pessoa1["idade"]; // pessoa1.idade
console.log("Pessoa 1: ", pessoa1);