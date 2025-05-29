/*
2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 
80 Km h^-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, 
exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para calcular a multa
function calcular_multa(velocidade) {
    const velocidade_maxima = 80;
    const valor_por_km = 5.0;

    // Cálculo da multa
    const excesso = velocidade - velocidade_maxima;
    const multa = excesso * valor_por_km;

    return multa;
}

// Solicita ao usuário que digite a velocidade do carro
rl.question("Digite a velocidade do carro (em Km/h): ", (input_velocidade) => {
    const velocidade = parseFloat(input_velocidade);

    if (isNaN(velocidade) || velocidade < 0) {
        console.log("Por favor, digite um número válido e maior que zero.");
    } else if (velocidade > 80) {
        const multa = calcular_multa(velocidade);
        console.log(
            `Você foi multado! O valor da multa é R$ ${multa.toFixed(2)}.`
        );
    } else {
        console.log("Você está dentro do limite de velocidade.");
    }

    rl.close();
});
