/*
33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para ler uma matriz 3x3
function ler_matriz(callback) {
    const M = Array.from({ length: 3 }, () => Array(3).fill(0));
    let linha_atual = 0;

    // Função para ler a matriz linha por linha
    const ler_linha = () => {
        if (linha_atual < 3) {
            rl.question(
                `Digite os valores da linha ${
                    linha_atual + 1
                } (separados por espaço): `,
                (linha) => {
                    M[linha_atual] = linha.split(" ").map(Number);
                    linha_atual++;
                    ler_linha();
                }
            );
        } else {
            callback(M);
        }
    };

    ler_linha();
}

// Função para calcular a média dos elementos da diagonal secundária
function media_diagonal_secundaria(M) {
    let soma = 0;
    for (let i = 0; i < 3; i++) {
        soma += M[i][2 - i]; // Elementos da diagonal secundária
    }
    return soma / 3; // Média
}

// Função para multiplicar os elementos da diagonal principal pela média da
// diagonal secundária
function multiplicar_diagonal_principal(M, media) {
    const M_modificada = M.map((linha, i) => {
        return linha.map((valor, j) => {
            if (i === j) {
                // Elementos da diagonal principal
                return valor * media;
            }
            return valor; // Outros elementos permanecem inalterados
        });
    });
    return M_modificada;
}

// Função principal para executar o algoritmo
function main() {
    ler_matriz((M) => {
        console.log("Matriz original M:");
        console.table(M);

        const media = media_diagonal_secundaria(M);
        console.log("Média dos elementos da diagonal secundária:", media);

        const M_modificada = multiplicar_diagonal_principal(M, media);
        console.log("Matriz modificada M:");
        console.table(M_modificada);

        rl.close();
    });
}

main();
