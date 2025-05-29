/*
11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para calcular os valores
function calcular_pa(primeiro_termo, razao) {
    let soma = 0;
    let termos = [];

    for (let i = 0; i < 10; i++) {
        const termo = primeiro_termo + i * razao;
        termos.push(termo);
        soma += termo;
    }

    console.log(`Os 10 primeiros termos da PA são: ${termos.join(", ")}`);
    console.log(`A soma dos termos é: ${soma}`);
}

// Função para ler os dados do usuário
function ler_dados() {
    rl.question("Digite o primeiro termo da PA: ", (input_termo) => {
        const primeiro_termo = parseFloat(input_termo);

        if (isNaN(primeiro_termo)) {
            console.log("Por favor, insira um número válido.");
            ler_dados(); // Reinicia a função
            return;
        }

        rl.question("Digite a razão da PA: ", (input_razao) => {
            const razao = parseFloat(input_razao);

            if (isNaN(razao)) {
                console.log("Por favor, insira um número válido.");
                ler_dados(); // Reinicia a função
                return;
            }

            calcular_pa(primeiro_termo, razao);
            rl.close();
        });
    });
}

// Inicia o programa
ler_dados();
