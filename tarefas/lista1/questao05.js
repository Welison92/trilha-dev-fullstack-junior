/*
5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para calcular o IMC e determinar a categoria de peso
function calcular_IMC(peso, altura) {
    const imc = peso / (altura * altura);
    let categoria = "";

    if (imc < 18.5) {
        categoria = "Baixo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidade";
    }

    return { imc, categoria };
}

// Solicita ao usuário que digite o peso e a altura
rl.question("Digite seu peso (em kg): ", (peso) => {
    rl.question("Digite sua altura (em metros): ", (altura) => {
        const { imc, categoria } = calcular_IMC(
            parseFloat(peso),
            parseFloat(altura)
        );
        console.log(`Seu IMC é: ${imc.toFixed(2)}`);
        console.log(`Categoria de peso: ${categoria}`);
        rl.close();
    });
});
