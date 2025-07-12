/*
45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array.
*/

const strings = ["maçã", "banana", "laranja", "maçã", "banana", "maçã"];

// Função que conta a frequência de cada string no array e retorna um objeto
function contar_frequencia(array) {
    const frequencia = {};

    for (const str of array) {
        if (frequencia[str]) {
            frequencia[str]++;
        } else {
            frequencia[str] = 1;
        }
    }

    return frequencia;
}

// Chamada da função e exibição do resultado
const resultado = contar_frequencia(strings);

console.log(resultado);
