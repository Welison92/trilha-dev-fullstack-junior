/*
1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos 
dias de vida um fumante perderá e exiba o total em dias.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para calcular a redução do tempo de vida de um fumante
function calcular_reducao_tempo(quantidade_cigarros, anos_fumando) {
    const minutos_por_cigarro = 10;
    const dias_por_ano = 365;
    const minutos_por_dia = 24 * 60;

    // Cálculo da redução de vida em minutos
    const reducao_minutos =
        quantidade_cigarros * minutos_por_cigarro * dias_por_ano * anos_fumando;

    // Conversão para dias
    const reducao_dias = reducao_minutos / minutos_por_dia;

    return reducao_dias;
}

// Solicita ao usuário que digite a quantidade de cigarros fumados por dia e os
//  anos fumando

// Solicita ao usuário que digite um número inteiro
rl.question(
    "Digite a quantidade de cigarros fumados por dia: ",
    (input_cigarros) => {
        const quantidade_cigarros = parseInt(input_cigarros, 10);

        if (isNaN(quantidade_cigarros) || quantidade_cigarros < 0) {
            console.log(
                "Por favor, digite um número inteiro válido e maior que zero."
            );
            rl.close();
            return;
        }

        rl.question("Digite quantos anos você já fumou: ", (input_anos) => {
            const anos_fumando = parseInt(input_anos, 10);

            if (isNaN(anos_fumando) || anos_fumando < 0) {
                console.log(
                    "Por favor, digite um número inteiro válido e maior que zero."
                );
            } else {
                const reducao_dias = calcular_reducao_tempo(
                    quantidade_cigarros,
                    anos_fumando
                );
                console.log(
                    `Você perderá aproximadamente ${reducao_dias.toFixed(
                        2
                    )} dias de vida.`
                );
            }

            rl.close();
        });
    }
);
