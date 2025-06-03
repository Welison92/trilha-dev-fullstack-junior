/*
36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR".
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
    // Lê o gabarito
    const gabarito = await ler_vetor(13);

    // Processa cada apostador
    for (let i = 0; i < 100; i++) {
        const numero_apostador = i + 1;
        const respostas = await ler_vetor(13);

        // Conta os acertos
        let acertos = 0;
        for (let j = 0; j < 13; j++) {
            if (gabarito[j] === respostas[j]) {
                acertos++;
            }
        }

        // Exibe o resultado do apostador
        console.log(`Apostador ${numero_apostador}: ${acertos} acertos`);

        // Verifica se é o ganhador
        if (acertos === 13) {
            console.log("Parabéns, tu foi o GANHADOR");
        }
    }

    rl.close();
}

// Executa a função principal
main().catch((error) => {
    console.error("Erro:", error);
    rl.close();
});
