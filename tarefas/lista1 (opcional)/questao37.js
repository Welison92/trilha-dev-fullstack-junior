/*
37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para ler um vetor de caracteres
function ler_vetor(tamanho) {
    return new Promise((resolve) => {
        rl.question(
            `Digite ${tamanho} caracteres separados por espaço: `,
            (input) => {
                const vetor = input.split(" ").map((char) => char.trim());
                resolve(vetor);
            }
        );
    });
}

// Função principal
async function main() {
    // Lê o gabarito
    const gabarito = await ler_vetor(20);

    // Processa cada aluno
    for (let i = 0; i < 50; i++) {
        const numero_aluno = i + 1;
        const respostas = await ler_vetor(20);

        // Conta os acertos
        let acertos = 0;
        for (let j = 0; j < 20; j++) {
            if (gabarito[j] === respostas[j]) {
                acertos++;
            }
        }

        // Exibe o resultado do aluno
        console.log(`Aluno ${numero_aluno}: ${acertos} acertos`);

        // Verifica se o aluno foi aprovado ou reprovado
        if (acertos >= 12) {
            console.log("APROVADO");
        } else {
            console.log("REPROVADO");
        }
    }

    rl.close();
}

// Executa a função principal
main().catch((error) => {
    console.error("Erro:", error);
});
