/*
2. Jogo de Adivinhação
Escreva um script que gere um número aleatório de 1 a 100 e peça ao
usuário, para adivinhar. Use while para repetir até acertar, contando
tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para gerar um número aleatório entre 1 e 100
function gerar_numero_aleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

// Função principal do jogo de adivinhação
function jogo_adivinhacao() {
    const numero_aleatorio = gerar_numero_aleatorio();
    let tentativas = 0;

    console.log("Bem-vindo ao jogo de adivinhação!");
    console.log("Tente adivinhar o número entre 1 e 100.");

    const perguntar = () => {
        rl.question("Digite seu palpite: ", (palpite) => {
            const numero_palpite = parseInt(palpite, 10);
            tentativas++;

            if (numero_palpite === numero_aleatorio) {
                console.log(
                    `Parabéns! Você acertou o número ${numero_aleatorio} em ${tentativas} tentativas.`
                );
                rl.close();
            } else if (numero_palpite < numero_aleatorio) {
                console.log("Mais alto!");
                perguntar();
            } else {
                console.log("Mais baixo!");
                perguntar();
            }
        });
    };

    perguntar();
}

// Inicia o jogo de adivinhação
jogo_adivinhacao();
