/*
34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para ler uma matriz 50x50
function ler_matriz(callback) {
    const M = Array.from({ length: 50 }, () => Array(50).fill(0));
    let linha_atual = 0;

    // Função para ler a matriz linha por linha
    const ler_linha = () => {
        if (linha_atual < 50) {
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

// Função para multiplicar cada linha pelo elemento da diagonal principal daquela linha
function multiplicar_diagonal(M) {
    const M_modificada = M.map((linha, i) => {
        const diagonal_element = linha[i]; // Elemento da diagonal principal
        return linha.map((valor) => valor * diagonal_element); // Multiplicação
    });
    return M_modificada;
}

// Função principal para executar o algoritmo
function main() {
    ler_matriz((M) => {
        const M_modificada = multiplicar_diagonal(M);

        console.log("Matriz após as multiplicações:");
        M_modificada.forEach((linha) => {
            console.log(linha.join(" "));
        });

        rl.close();
    });
}

main();
