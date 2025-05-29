/*
15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para ler os números
const ler_numeros = (quantidade) => {
    return new Promise((resolve) => {
        const numeros = [];
        let contador = 0;

        const perguntar_numero = () => {
            if (contador < quantidade) {
                rl.question(`Digite o número ${contador + 1}: `, (numero) => {
                    numeros.push(parseInt(numero));
                    contador++;
                    perguntar_numero();
                });
            } else {
                resolve(numeros);
            }
        };

        perguntar_numero();
    });
};

// Função principal
const main = async () => {
    const quantidade = 10;
    console.log(`Você irá informar ${quantidade} números inteiros.`);
    const numeros = await ler_numeros(quantidade);
    rl.close();

    console.log("\nNúmeros pares e suas posições:");
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            console.log(`Número: ${numeros[i]}, Posição: ${i}`);
        }
    }
};

// Executa a função principal
main().catch((error) => {
    console.error("Erro:", error);
    rl.close();
});
