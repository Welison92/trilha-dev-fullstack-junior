/*
6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para gerar um número aleatório entre 1 e 5
function numero_aleatorio() {
    return Math.floor(Math.random() * 5) + 1;
}

// Função principal do jogo
function jogar() {
    const numero_sorteado = numero_aleatorio();
    console.log("O computador sorteou um número entre 1 e 5.");

    rl.question("Tente adivinhar o número: ", (input_usuario) => {
        const usuario = parseInt(input_usuario);

        if (usuario < 1 || usuario > 5 || isNaN(usuario)) {
            console.log("Por favor, insira um número válido entre 1 e 5.");
            jogar(); // Reinicia o jogo
            return;
        }

        if (usuario === numero_sorteado) {
            console.log("Parabéns! Você adivinhou o número!");
        } else {
            console.log(
                `Você errou! O número sorteado era ${numero_sorteado}.`
            );
        }

        rl.question("Deseja jogar novamente? (s/n): ", (resposta) => {
            if (resposta.toLowerCase() === "s") {
                jogar(); // Reinicia o jogo
            } else {
                console.log("Obrigado por jogar!");
                rl.close();
            }
        });
    });
}

// Inicia o jogo
jogar();
