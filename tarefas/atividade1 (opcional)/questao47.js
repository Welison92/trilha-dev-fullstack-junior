/*
47. Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados.
*/

// Função que transforma um objeto aplicando uma função a cada propriedade
function transformar_objeto(objeto, funcao) {
    const novo_objeto = {};

    for (const chave in objeto) {
        if (objeto.hasOwnProperty(chave)) {
            novo_objeto[chave] = funcao(objeto[chave]);
        }
    }

    return novo_objeto;
}

// Exemplo de uso:
const objeto_entrada = {
    a: 1,
    b: 2,
    c: 3,
};

const funcao_transformacao = (valor) => valor * 2;
const resultado = transformar_objeto(objeto_entrada, funcao_transformacao);

console.log(resultado);
