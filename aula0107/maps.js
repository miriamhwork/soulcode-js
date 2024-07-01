// Map = cria um novo array com os resultados da função aplicada em cada elemento
const numeros = [3, 4, 9, 10];
// Cada elemento no array, será aplicado na função 
// O resultado será gerado em um novo array
const quadrado = numeros.map((n) => n**2);

console.log(quadrado);
// Aqui fica implícito o que ele vai fazer, não precisa do push, nem criar a nova variável no novo array.

// ---------------------- 
const nome = ["josé", "maria", "joão", "carlos"];
// nome = valor da cada elemento
// i = indice desse elemento
const nomesMaiusculos = nomes.map((nome, i) => nome.toUpperCase());
const nomesExclamacao = nomes.map((nome, i) => nome + "!");

console.log(nomes);
console.log(nomesMaiusculos);
console.log(nomesExclamacao);

// Exemplo: Use map para transformar os valores do array abaixo.
// Se o número dor par faz o número * 2, se for ímpar número / 2
const valores = [1, 2, 3, 4, 5, 6, 7];

const novosValores = valores.map((valor) => {
    if(valor % 2 == 0) {
        return valor * 2;
    } else {
        return valor / 2; // ao invés de console.log, tem que por o return aqui para sair uma nova array
    }
});
console.log (novosValores);
