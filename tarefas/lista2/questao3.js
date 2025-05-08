/*
3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para calcular o preço da passagem
function calcular_preco_passagem(distancia) {
    const preco_por_km_curto = 0.5;
    const preco_por_km_longo = 0.45;
    let preco_total;

    if (distancia <= 200) {
        preco_total = distancia * preco_por_km_curto;
    } else {
        preco_total = distancia * preco_por_km_longo;
    }

    return preco_total;
}

// Solicita ao usuário que digite a distância
rl.question(
    "Digite a distância que deseja percorrer (em Km): ",
    (input_distancia) => {
        const distancia = parseFloat(input_distancia);

        if (isNaN(distancia) || distancia <= 0) {
            console.log("Por favor, digite um número válido e maior que zero.");
        } else {
            const preco = calcular_preco_passagem(distancia);
            console.log(`O preço da passagem é R$ ${preco.toFixed(2)}.`);
        }

        rl.close();
    }
);
