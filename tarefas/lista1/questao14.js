/*
14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para calcular o fatorial
function calcular_fatorial() {
    rl.question(
        "Digite um número inteiro para calcular o fatorial: ",
        (numero) => {
            const num = parseInt(numero);
            if (!isNaN(num) && num >= 0) {
                let fatorial = 1;
                for (let i = 1; i <= num; i++) {
                    fatorial *= i;
                }
                console.log(`O fatorial de ${num} é: ${fatorial}`);
            } else {
                console.log("Por favor, insira um número inteiro válido.");
            }
            rl.close(); // Fecha a interface de leitura após calcular o fatorial
        }
    );
}

// Chama a função para iniciar o processo de cálculo do fatorial
calcular_fatorial();
