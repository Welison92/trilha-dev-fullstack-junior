/*
38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.
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
    // Lê o vetor de 6 posições
    const vetor = await ler_vetor(6);

    // Lê a operação desejada
    rl.question(
        "Digite a operação desejada (1-soma, 2-produto, 3-média, 4-ordenar, 5-mostrar): ",
        (operacao) => {
            switch (operacao) {
                case "1":
                    const soma = vetor.reduce((acc, val) => acc + val, 0);
                    console.log(`Soma dos elementos: ${soma}`);
                    break;
                case "2":
                    const produto = vetor.reduce((acc, val) => acc * val, 1);
                    console.log(`Produto dos elementos: ${produto}`);
                    break;
                case "3":
                    const media =
                        vetor.reduce((acc, val) => acc + val, 0) / vetor.length;
                    console.log(`Média dos elementos: ${media}`);
                    break;
                case "4":
                    const ordenado = [...vetor].sort((a, b) => a - b);
                    console.log(
                        `Elementos em ordem crescente: ${ordenado.join(", ")}`
                    );
                    break;
                case "5":
                    console.log(`Vetor: ${vetor.join(", ")}`);
                    break;
                default:
                    console.log("Operação inválida.");
            }
            rl.close();
        }
    );
}

// Executa a função principal
main().catch((error) => {
    console.error("Erro:", error);
    rl.close();
});
