/*
40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.)
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para ler um vetor de inteiros
function ler_vetor(tamanho) {
    return new Promise((resolve) => {
        rl.question(
            `Digite ${tamanho} números inteiros separados por espaço: `,
            (input) => {
                const vetor = input.split(" ").map(Number);
                resolve(vetor);
            }
        );
    });
}

// Função principal
async function main() {
    // Lê o resultado oficial da Loto
    const resultado_oficial = await ler_vetor(5);

    // Processa cada aposta
    for (let i = 0; i < 50; i++) {
        const numero_aposta = i + 1;
        const aposta = await ler_vetor(5);

        // Verifica se a aposta é um ganhador
        const is_ganhador = aposta.every((num) =>
            resultado_oficial.includes(num)
        );

        // Exibe o resultado da aposta
        if (is_ganhador) {
            console.log(`Aposta ${numero_aposta}: Ganhador`);
        } else {
            console.log(`Aposta ${numero_aposta}: Não é ganhador`);
        }
    }

    rl.close();
}

// Executa a função principal
main().catch((error) => {
    console.error("Erro:", error);
});
