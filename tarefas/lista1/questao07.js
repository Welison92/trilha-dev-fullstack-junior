/*
7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para calcular o valor total da compra de maçãs
function calcular_valor_macas(quantidade) {
    const preco_por_macas = quantidade < 12 ? 0.3 : 0.25;
    return quantidade * preco_por_macas;
}

// Solicita ao usuário que digite a quantidade de maçãs
rl.question("Digite a quantidade de maçãs compradas: ", (quantidade_macas) => {
    const quantidade = parseInt(quantidade_macas, 10);
    if (isNaN(quantidade) || quantidade < 0) {
        console.log("Por favor, insira um número válido de maçãs.");
    } else {
        const valor_total = calcular_valor_macas(quantidade);
        console.log(`Valor total da compra: R$${valor_total.toFixed(2)}`);
    }
    rl.close();
});
