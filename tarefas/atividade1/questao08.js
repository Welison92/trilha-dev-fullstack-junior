/*
8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para ler dois valores e exibi-los em ordem crescente
function ler_exibir_ordem_crescente() {
    rl.question("Digite o primeiro valor: ", (valor1) => {
        rl.question("Digite o segundo valor: ", (valor2) => {
            const num1 = parseFloat(valor1);
            const num2 = parseFloat(valor2);

            if (isNaN(num1) || isNaN(num2)) {
                console.log("Por favor, insira números válidos.");
            } else if (num1 === num2) {
                console.log("Os valores não podem ser iguais.");
            } else {
                const [menor, maior] =
                    num1 < num2 ? [num1, num2] : [num2, num1];
                console.log(`Valores em ordem crescente: ${menor}, ${maior}`);
            }
            rl.close();
        });
    });
}

// Chama a função para iniciar o processo de leitura e exibição
ler_exibir_ordem_crescente();
