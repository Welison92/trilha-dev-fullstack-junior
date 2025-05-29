/*
29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para ler uma matriz 5x5
function ler_matriz(callback) {
    const M = Array.from({ length: 5 }, () => Array(5).fill(0));
    let linha_atual = 0;

    // Função para ler a matriz linha por linha
    const ler_linha = () => {
        if (linha_atual < 5) {
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

// Função para calcular as somas solicitadas
function calcular_somas(M) {
    let soma_linha_4 = 0;
    let soma_coluna_2 = 0;
    let soma_diagonal_principal = 0;
    let soma_total = 0;

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            soma_total += M[i][j];
            if (i === 3) {
                // Linha 4 (índice 3)
                soma_linha_4 += M[i][j];
            }
            if (j === 1) {
                // Coluna 2 (índice 1)
                soma_coluna_2 += M[i][j];
            }
            if (i === j) {
                // Diagonal principal
                soma_diagonal_principal += M[i][j];
            }
        }
    }

    return {
        matriz: M,
        soma_linha_4,
        soma_coluna_2,
        soma_diagonal_principal,
        soma_total,
    };
}

// Função principal para executar o algoritmo
function main() {
    ler_matriz((M) => {
        const resultados = calcular_somas(M);
        console.log("Matriz M:");
        console.table(resultados.matriz);
        console.log(`Soma da linha 4: ${resultados.soma_linha_4}`);
        console.log(`Soma da coluna 2: ${resultados.soma_coluna_2}`);
        console.log(
            `Soma da diagonal principal: ${resultados.soma_diagonal_principal}`
        );
        console.log(
            `Soma total de todos os elementos: ${resultados.soma_total}`
        );
        rl.close();
    });
}

main();
