/*
28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal;
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para ler uma matriz 10x10
function ler_matriz(callback) {
    const M = Array.from({ length: 10 }, () => Array(10).fill(0));
    let linha_atual = 0;

    // Função para ler a matriz linha por linha
    const ler_linha = () => {
        if (linha_atual < 10) {
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

// Função para calcular a soma dos elementos acima e abaixo da diagonal principal
function calcular_somas(M) {
    let soma_acima = 0;
    let soma_abaixo = 0;

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (i < j) {
                soma_acima += M[i][j];
            } else if (i > j) {
                soma_abaixo += M[i][j];
            }
        }
    }

    return { soma_acima, soma_abaixo };
}

// Função principal para executar o algoritmo
function main() {
    ler_matriz((M) => {
        const { soma_acima, soma_abaixo } = calcular_somas(M);
        console.log(
            `Soma dos elementos acima da diagonal principal: ${soma_acima}`
        );
        console.log(
            `Soma dos elementos abaixo da diagonal principal: ${soma_abaixo}`
        );
        rl.close();
    });
}

main();
