// 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

// // O usuário deve escolher uma das opções e o computador deve escolher aleatoriamente.
// // O resultado deve ser exibido na tela, informando quem ganhou ou se houve empate.
// // O jogo deve ser executado em um loop, permitindo que o usuário jogue várias vezes até escolher sair.

import readline from "readline";
import { randomInt } from "crypto";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para obter a escolha do computador
function escolha_computador() {
    const opcoes = ["pedra", "papel", "tesoura"];
    const indice_aleatorio = randomInt(0, opcoes.length);
    return opcoes[indice_aleatorio];
}

// Função para determinar o vencedor
function determinar_vencedor(usuario, computador) {
    if (usuario === computador) {
        return "empate";
    } else if (
        (usuario === "pedra" && computador === "tesoura") ||
        (usuario === "papel" && computador === "pedra") ||
        (usuario === "tesoura" && computador === "papel")
    ) {
        return "usuario";
    } else {
        return "computador";
    }
}

// Função principal do jogo
function jogar() {
    rl.question(
        "Escolha pedra, papel ou tesoura (ou digite 'sair' para encerrar): ",
        (input_usuario) => {
            const usuario = input_usuario.toLowerCase();

            if (usuario === "sair") {
                console.log("Obrigado por jogar!");
                rl.close();
                return;
            }

            const computador = escolha_computador();
            const vencedor = determinar_vencedor(usuario, computador);

            console.log(`Você escolheu: ${usuario}`);
            console.log(`Computador escolheu: ${computador}`);

            if (vencedor === "empate") {
                console.log("Empate!");
            } else if (vencedor === "usuario") {
                console.log("Você ganhou!");
            } else {
                console.log("Computador ganhou!");
            }

            // Chama a função novamente para continuar o jogo
            jogar();
        }
    );
}

// Inicia o jogo
jogar();
