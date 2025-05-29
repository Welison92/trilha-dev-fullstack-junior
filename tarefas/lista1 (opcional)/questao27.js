/*
27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para ler uma matriz 6x6 e um valor A, multiplicar a matriz por A e 
// armazenar em um vetor
function ler_matriz_valor(callback) {
    const M = Array.from({ length: 6 }, () => Array(6).fill(0));
    let valorA = 0;
    let linha_atual = 0;

    // Função para ler a matriz linha por linha
    const ler_linha = () => {
        if (linha_atual < 6) {
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
            rl.question("Digite o valor A: ", (valor) => {
                valorA = Number(valor);
                callback(M, valorA);
            });
        }
    };

    ler_linha();
}

// Função para multiplicar a matriz M por um valor A e armazenar os resultados 
// em um vetor V
function multiplicar_matriz_valor(M, A) {
    const V = [];

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            V.push(M[i][j] * A);
        }
    }

    return V;
}

// Função principal para executar o algoritmo
function main() {
    ler_matriz_valor((M, A) => {
        const V = multiplicar_matriz_valor(M, A);
        console.log("Matriz M:");
        console.table(M);
        console.log(`Valor A: ${A}`);
        console.log("Vetor V (valores multiplicados por A):");
        console.log(V);
        rl.close();
    });
}

// Iniciar o programa
main();
