/*
31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para ler uma matriz 30x30
function ler_matriz(callback) {
    const V = Array.from({ length: 30 }, () => Array(30).fill(0));
    let linha_atual = 0;

    // Função para ler a matriz linha por linha
    const ler_linha = () => {
        if (linha_atual < 30) {
            rl.question(
                `Digite os valores da linha ${
                    linha_atual + 1
                } (separados por espaço): `,
                (linha) => {
                    V[linha_atual] = linha.split(" ").map(Number);
                    linha_atual++;
                    ler_linha();
                }
            );
        } else {
            callback(V);
        }
    };

    ler_linha();
}

// Função para contar valores iguais a A e criar matriz X
function contar_filtrar(V, A) {
    let contador = 0;
    const X = [];

    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
            if (V[i][j] === A) {
                contador++;
            } else {
                // Adiciona o valor diferente de A na matriz X
                if (!X[i]) X[i] = [];
                X[i][j] = V[i][j];
            }
        }
    }

    return { contador, X };
}

// Função principal para executar o algoritmo
function main() {
    rl.question("Digite um número inteiro A: ", (inputA) => {
        const A = parseInt(inputA, 10);
        if (isNaN(A)) {
            console.log("Por favor, insira um número inteiro válido.");
            rl.close();
            return;
        }

        ler_matriz((V) => {
            const { contador, X } = contar_filtrar(V, A);
            console.log(`Número de valores iguais a ${A}: ${contador}`);
            console.log("Matriz X (valores diferentes de A):");
            console.table(X);
            rl.close();
        });
    });
}

main();
