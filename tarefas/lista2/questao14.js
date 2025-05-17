/*
14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para ler os nomes
const ler_nomes = (quantidade) => {
    return new Promise((resolve) => {
        const nomes = [];
        let contador = 0;

        const perguntar_nome = () => {
            if (contador < quantidade) {
                rl.question(`Digite o nome ${contador + 1}: `, (nome) => {
                    nomes.push(nome);
                    contador++;
                    perguntar_nome();
                });
            } else {
                resolve(nomes);
            }
        };

        perguntar_nome();
    });
};

// Função principal
const main = async () => {
    const quantidade = 7;
    console.log(`Você irá informar ${quantidade} nomes.`);
    const nomes = await ler_nomes(quantidade);
    rl.close();

    console.log("\nNomes informados na ordem inversa:");
    for (let i = nomes.length - 1; i >= 0; i--) {
        console.log(nomes[i]);
    }
};

// Executa a função principal
main().catch((error) => {
    console.error("Erro:", error);
    rl.close();
});
