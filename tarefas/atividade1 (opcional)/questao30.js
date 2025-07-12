/*
30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados.
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

// Função para calcular as somas das linhas e colunas
function calcular_somas(M) {
    const SL = Array(5).fill(0); // Soma das linhas
    const SC = Array(5).fill(0); // Soma das colunas

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            SL[i] += M[i][j]; // Soma da linha i
            SC[j] += M[i][j]; // Soma da coluna j
        }
    }

    return { SL, SC };
}

// Função principal para executar o algoritmo
function main() {
    ler_matriz((M) => {
        const { SL, SC } = calcular_somas(M);
        console.log("Matriz M:");
        M.forEach((linha) => console.log(linha.join(" ")));
        console.log("Soma das linhas (SL):", SL);
        console.log("Soma das colunas (SC):", SC);
        rl.close();
    });
}

main();
