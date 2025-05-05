/*
10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para ler um número inteiro e exibi-lo 10 vezes
function ler_exibir_dez_vezes() {
    rl.question("Digite um número inteiro: ", (numero) => {
        const num = parseInt(numero, 10);

        if (isNaN(num)) {
            console.log("Por favor, insira um número inteiro válido.");
        } else {
            for (let i = 0; i < 10; i++) {
                console.log(`Número ${i + 1}: ${num}`);
            }
        }
        rl.close();
    });
}

// Chama a função para iniciar o processo de leitura e exibição
ler_exibir_dez_vezes();
