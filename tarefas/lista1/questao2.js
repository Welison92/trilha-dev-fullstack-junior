/*
2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para classificar a idade
function classificar_idade(idade) {
    if (idade >= 0 && idade <= 12) {
        console.log("Criança");
    } else if (idade >= 13 && idade <= 17) {
        console.log("Adolescente");
    } else if (idade >= 18 && idade <= 59) {
        console.log("Adulto");
    } else if (idade >= 60) {
        console.log("Idoso");
    } else {
        console.log("Idade inválida.");
    }
}

// Solicita ao usuário que digite a idade
rl.question("Digite a idade: ", (input) => {
    const idade = parseInt(input, 10);

    if (isNaN(idade)) {
        console.log("Por favor, digite uma idade válida.");
    } else {
        classificar_idade(idade);
    }

    rl.close();
});
