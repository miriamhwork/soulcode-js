// Objetos -> são estruturas para representar dados
let pessoa = {
    nome: "José Almi",
    cpf: "999.999.999-99",
    dataNascimento: "10/01/2000",
    contato: { // objeto aninhado
        email: "jose.almir@soulcode.com",
        telefone: "(99) 9-9999-9999",
        fax: "+9 999 999 9999"
    },
    endereco: {
        cidade: "Fortaleza",
        estado: "CE",
        rua: "Rua X",
        numero: "271",
    },
    objetivosProfissionais: ["Home Office", "Desenvolvedor Senior", "Exterior"],
    formacao: [
        { nome: "Ensino médio", período: "2000-2003" }, // índice 0
        { nome: "Técnico em Informática", período: "2003-2005" }, // índice 1
        { nome: "Bacharelado em Computação", período: "2005-2010" }, // índice 2
    ]
}

console.log(pessoa.contato);
console.log(pessoa.contato.email); // acesso o objeto aninhado específico email
console.log(pessoa.endereco);
console.log(pessoa.endereco.estado); // acesso o objeto aninhado específico email
pessoa.objetivosProfissionais.push("Dólar"); // adiciona mais um valor no array
console.log(pessoa.objetivosProfissionais); // Imprime o array com o "Dólar" adicionado
pessoa.objetivosProfissionais.forEach(objetivo => console.log(objetivo)); //Imprime cada item (objetivo) em uma linha (não imprime como uma array)

console.log(pessoa.formacao);
pessoa.formacao.push({ nome: "Mestrado em IA", periodo: "2012-2012"});
// adicionar mais um item no array formação
console.log(pessoa.formacao); // imprime só a formação

console.log(pessoa.formacao[0].nome); // imprime só o índice 0 que é o nome da formação

for(let f of pessoa.formacao) { // outra forma de chegar nos objetos do array
    console.log("Formação: ", f.nome);
    console.log("Período: ", f.período);
}

// Exemplo: Crie um objeto para representar um aluno:
    // nome
    // serie
    // materias (nome da materia, nome do professor)
    // notas

let aluno = {
    nome: "Miriam",
    serie: "1º ano",
    materias: [
        { nomeMateria: "Matemática", professor: "Henrique" },
        { nomeMateria: "Inglês", professor: "Angela" },
        { nomeMateria: "Português", professor: "Matheus" },
        { nomeMateria: "História", professor: "Marcos" },
        { nomeMateria: "Geografia", professor: "Diana" },
    ],
    notas: [9.0, 8.1, 4.1, 7.3, 5.6],
}
