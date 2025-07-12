/*
44. Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número.
*/

function contar_strings(obj) {
    let contador = 0;

    for (const chave in obj) {
        if (typeof obj[chave] === "string") {
            contador++;
        }
    }

    return contador;
}

// Exemplo de uso da função
const exemplo_objeto = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo",
    profissao: "Engenheiro",
    ativo: true,
    hobbies: ["futebol", "leitura"],
};

const resultado = contar_strings(exemplo_objeto);

console.log(`Número de propriedades do tipo string: ${resultado}`);
