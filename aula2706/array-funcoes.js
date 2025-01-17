let nums = [];
console.log(nums);

// Adiciona elemento ao final do array
nums.push(4);
nums.push(5);
nums.push(10);
console.log(nums);
nums.push(1000);
console.log(nums);

// Remove o último elemento
nums.pop();
nums.pop();
console.log(nums);

// Inserir no início
let notas = [6.5, 7.9, 9.0];
console.log(notas);
notas.unshift(8.0);
console.log(notas);

// Remover do início
notas.shift();
notas.shift();
console.log(notas);

// Juntar o array e montar uma string
let enderecoIP = [192, 168, 1, 1]; // pode ser numérico ou string
console.log(enderecoIP.join("."));

let data = ["27", "06", "2024"];
let dataString = data.join("/");
console.log(dataString);

// Concatenar arrays
let p1 = ["Mouse", "Monitor", "Microfone"];
let p2 = ["Webcam", "Teclado"];

let p3 = p1.concat(p2); // Novo array com os dois combinados
console.log(p3);

// Array reverso
let n = [1, 2, 3];
let nInvertido = n.reverse(); // gera um novo array invertido
console.log(nInvertido); 

// Includes = o valor existe ou não no array
let pessoas = ["joão", "José", "ana"];

if(pessoas.includes("josé")) {
    console.log("josé está presente!");
} else {
    console.log("josé não está presente!");
}

// Split
let frase = "Eu vou estudar React";
let dataInicio = "26/06/2000";
let palavraEspecial = "BATATA";

let fraseArray = frase.split(" ");
console.log(fraseArray);

let dataArray = dataInicio.split("/");
console.log(dataArray);

// Inverter a string
console.log(palavraEspecial.split("").reverse().join(""));

// indexOf -> retornar o índice de um elemento
let figuras = ["coração", "estrela", "ok", "não", "joinha", "sorriso"];

console.log(figuras.indexOf("ok"));
console.log(figuras.indexOf("joinha"));
console.log(figuras.indexOf("batata")); // Quando não encontrou o elemento, ele devolve -1

// Slice
let fig1 = figuras.slice(1, 3);
console.log(fig1);
// o segundo parâmetro é até onde ele deve parar, mas não considera esse número

let fig2 = figuras.slice(1); // pode deixar sem o 2º parâmetro, assim vai até o último elemento
console.log(fig2);

let fig3 = figuras.slice(3, 7) // mesmo não tendo o 7º elemento, ele vai até o final do array
console.log(fig3);

let fig4 = figuras.slice(2, figuras.length); // vai té o final do array
console.log(fig4);

// Último elemento
console.log(figuras.slice(-1)); // aqui pega o último índice do array
console.log(figuras[figuras.length -1]); // aqui pega o elemento dentro da arry, como uma string (porque a array é de string)