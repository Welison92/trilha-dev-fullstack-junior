/*
11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para ler 5 números e calcular a soma total
function calcular_soma() {
    let soma = 0;
    const numeros = [];

    // Função auxiliar para ler os números
    function ler_numero(i) {
        if (i < 5) {
            rl.question(`Digite o número ${i + 1}: `, (numero) => {
                const num = parseFloat(numero);
                if (!isNaN(num)) {
                    numeros.push(num);
                    soma += num;
                    ler_numero(i + 1); // Chama a função novamente para o próximo número
                } else {
                    console.log("Por favor, insira um número válido.");
                    ler_numero(i); // Repete a leitura do mesmo número
                }
            });
        } else {
            console.log(
                `A soma total dos números ${numeros.join(", ")} é: ${soma}`
            );
            rl.close(); // Fecha a interface de leitura após a soma
        }
    }

    ler_numero(0); // Inicia a leitura do primeiro número
}

// Chama a função para iniciar o processo de leitura e soma
calcular_soma();
