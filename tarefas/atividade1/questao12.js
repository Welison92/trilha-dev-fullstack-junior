/*
12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para exibir a tabuada de um número
function exibir_tabuada() {
    rl.question(
        "Digite um número para ver sua tabuada (de 1 a 10): ",
        (numero) => {
            const num = parseInt(numero);
            if (!isNaN(num) && num >= 1 && num <= 10) {
                console.log(`Tabuada do ${num}:`);
                for (let i = 1; i <= 10; i++) {
                    console.log(`${num} x ${i} = ${num * i}`);
                }
            } else {
                console.log("Por favor, insira um número válido entre 1 e 10.");
            }
            rl.close(); // Fecha a interface de leitura após exibir a tabuada
        }
    );
}

// Chama a função para iniciar o processo de exibição da tabuada
exibir_tabuada();
