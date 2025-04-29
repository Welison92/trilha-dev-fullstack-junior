/*
1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if. 
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para verificar se o número é par ou ímpar
function verificar_par_impar(numero) {
    if (numero % 2 === 0) {
        console.log(`O número ${numero} é par.`);
    } else {
        console.log(`O número ${numero} é ímpar.`);
    }
}

// Solicita ao usuário que digite um número inteiro
rl.question("Digite um número inteiro: ", (input) => {
    const numero = parseInt(input, 10);

    if (isNaN(numero)) {
        console.log("Por favor, digite um número inteiro válido.");
    } else {
        verificar_par_impar(numero);
    }

    rl.close();
});
