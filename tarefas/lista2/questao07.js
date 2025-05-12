/*
7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para calcular o custo do aluguel
function calcular_custo(tipo_carro, dias, km_percorridos) {
    let custo_dia = tipo_carro === "popular" ? 90 : 150;
    let custo_km;

    if (tipo_carro === "popular") {
        custo_km = km_percorridos <= 100 ? 0.2 : 0.1;
    } else {
        custo_km = km_percorridos <= 200 ? 0.3 : 0.25;
    }

    return custo_dia * dias + custo_km * km_percorridos;
}

// Função principal
function calcular_aluguel() {
    rl.question("Digite o tipo de carro (popular ou luxo): ", (tipo_carro) => {
        tipo_carro = tipo_carro.toLowerCase();

        if (tipo_carro !== "popular" && tipo_carro !== "luxo") {
            console.log(
                "Tipo de carro inválido. Por favor, escolha 'popular' ou 'luxo'."
            );
            calcular_aluguel(); // Reinicia a função
            return;
        }

        rl.question("Quantos dias de aluguel? ", (dias) => {
            rl.question("Quantos Km foram percorridos? ", (km_percorridos) => {
                const custo_total = calcular_custo(
                    tipo_carro,
                    parseInt(dias),
                    parseInt(km_percorridos)
                );
                console.log(
                    `O custo total do aluguel é: R$ ${custo_total.toFixed(2)}`
                );
                rl.close();
            });
        });
    });
}

// Inicia o cálculo do aluguel
calcular_aluguel();
