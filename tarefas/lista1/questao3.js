/*
3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para classificar a nota
function classificar_nota(nota) {
    if (nota >= 0 && nota < 4) {
        console.log("Reprovado");
    } else if (nota >= 4 && nota < 7) {
        console.log("Recuperação");
    } else if (nota >= 7 && nota <= 10) {
        console.log("Aprovado");
    } else {
        console.log("Nota inválida.");
    }
}

// Solicita ao usuário que digite a nota
rl.question("Digite a nota (0 a 10): ", (input) => {
    const nota = parseFloat(input);

    if (isNaN(nota)) {
        console.log("Por favor, digite uma nota válida.");
    } else {
        classificar_nota(nota);
    }

    rl.close();
});
