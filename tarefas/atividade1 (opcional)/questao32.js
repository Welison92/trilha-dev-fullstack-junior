/*
32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para ler uma matriz 12x13
function ler_matriz(callback) {
    const M = Array.from({ length: 12 }, () => Array(13).fill(0));
    let linha_atual = 0;

    // Função para ler a matriz linha por linha
    const ler_linha = () => {
        if (linha_atual < 12) {
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

// Função para dividir cada elemento pelo maior em módulo da linha
function dividir_maior(M) {
    const M_modificada = M.map((linha) => {
        const maior = Math.max(...linha.map(Math.abs)); // Maior elemento em módulo
        return linha.map((valor) => (maior !== 0 ? valor / maior : 0)); // Divisão
    });
    return M_modificada;
}

// Função principal para executar o algoritmo
function main() {
    ler_matriz((M) => {
        console.log("Matriz original M:");
        console.table(M);

        const M_modificada = dividir_maior(M);
        console.log("Matriz modificada M:");
        console.table(M_modificada);

        rl.close();
    });
}

main();
