/*
35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para ler 30 valores e separá-los em dois vetores: pares e ímpares
function ler_valores(callback) {
    const pares = [];
    const impares = [];
    let contador = 0;

    const ler_valor = () => {
        if (contador < 30) {
            rl.question(`Digite o valor ${contador + 1}: `, (valor) => {
                const num = Number(valor);
                if (num % 2 === 0) {
                    // Adiciona ao vetor de pares
                    if (pares.length < 5) {
                        pares.push(num);
                    } else {
                        console.log("Vetor de pares cheio:", pares);
                        pares.length = 0; // Limpa o vetor
                        pares.push(num); // Adiciona o novo valor
                    }
                } else {
                    // Adiciona ao vetor de ímpares
                    if (impares.length < 5) {
                        impares.push(num);
                    } else {
                        console.log("Vetor de ímpares cheio:", impares);
                        impares.length = 0; // Limpa o vetor
                        impares.push(num); // Adiciona o novo valor
                    }
                }
                contador++;
                ler_valor();
            });
        } else {
            callback(pares, impares);
        }
    };

    ler_valor();
}

// Função principal para executar o algoritmo
function main() {
    ler_valores((pares, impares) => {
        console.log("Vetor de pares:", pares);
        console.log("Vetor de ímpares:", impares);
        rl.close();
    });
}

main();
