/*
39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
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
    // Lê o vetor de 100 posições
    const vetorA = await ler_vetor(100);

    // Compacta o vetor, retirando valores nulos e negativos
    const vetorB = vetorA.filter((valor) => valor !== null && valor >= 0);

    // Exibe o vetor B
    console.log("Vetor B (compactado):", vetorB.join(", "));

    rl.close();
}

// Executa a função principal
main().catch((error) => {
    console.error("Erro:", error);
    rl.close();
});
