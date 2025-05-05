/*
13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para calcular a média aritmética
function calcular_media() {
    let soma = 0;
    let contador = 0;

    function solicitar_numero() {
        rl.question("Digite um número decimal (ou 0 para sair): ", (numero) => {
            const num = parseFloat(numero);
            if (!isNaN(num)) {
                if (num === 0) {
                    if (contador > 0) {
                        const media = soma / contador;
                        console.log(
                            `A média aritmética dos números digitados é: ${media}`
                        );
                    } else {
                        console.log("Nenhum número foi digitado.");
                    }
                    rl.close(); // Fecha a interface de leitura após calcular a média
                } else {
                    soma += num;
                    contador++;
                    solicitar_numero(); // Chama a função novamente para solicitar o próximo número
                }
            } else {
                console.log("Por favor, insira um número decimal válido.");
                solicitar_numero(); // Chama a função novamente para solicitar o próximo número
            }
        });
    }

    solicitar_numero(); // Inicia o processo de solicitação de números
}

// Chama a função para iniciar o processo de cálculo da média
calcular_media();
