/*
42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.
*/

const dados = {
    nome: "João",
    idade: 30,
    hobbies: ["futebol", "leitura", "cinema"],
    numeros: [1, 2, 3, 4, 5],
    endereco: {
        rua: "Rua A",
        numero: 123,
        cidade: "São Paulo",
    },
    ativo: true,
    notas: [10, 8, 9],
    profissao: "Engenheiro",
};

// Função que filtra as propriedades do objeto e retorna apenas aquelas que são arrays
function filtrar_arrays(obj) {
    const novo_objeto = {};

    for (const chave in obj) {
        if (Array.isArray(obj[chave])) {
            novo_objeto[chave] = obj[chave];
        }
    }

    return novo_objeto;
}

// Chamada da função e exibição do resultado
const resultado = filtrar_arrays(dados);

console.log(resultado);
