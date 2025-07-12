/*
17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para ler os dados das pessoas
const ler_dados = (quantidade) => {
    return new Promise((resolve) => {
        const nomes = [];
        const idades = [];
        let contador = 0;

        const perguntar_dados = () => {
            if (contador < quantidade) {
                rl.question(
                    `Digite o nome da pessoa ${contador + 1}: `,
                    (nome) => {
                        nomes.push(nome);
                        rl.question(`Digite a idade de ${nome}: `, (idade) => {
                            idades.push(parseInt(idade));
                            contador++;
                            perguntar_dados();
                        });
                    }
                );
            } else {
                resolve({ nomes, idades });
            }
        };

        perguntar_dados();
    });
};

// Função principal
const main = async () => {
    const quantidade = 9;
    console.log(`Você irá informar os dados de ${quantidade} pessoas.`);
    const { nomes, idades } = await ler_dados(quantidade);
    rl.close();

    console.log("\nPessoas menores de idade:");
    for (let i = 0; i < quantidade; i++) {
        if (idades[i] < 18) {
            console.log(`Nome: ${nomes[i]}, Idade: ${idades[i]}`);
        }
    }
};

// Executa a função principal
main().catch((error) => {
    console.error("Erro:", error);
    rl.close();
});
