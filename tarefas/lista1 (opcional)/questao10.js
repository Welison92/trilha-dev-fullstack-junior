/*
10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para calcular os valores
function calcular_valores() {
    let soma = 0;
    let menor = Infinity;
    let contagem = 0;
    let pares = 0;

    function ler_dados() {
        rl.question("Digite um número: ", (input_numero) => {
            const numero = parseFloat(input_numero);

            if (isNaN(numero)) {
                console.log("Por favor, insira um número válido.");
                ler_dados(); // Reinicia a função
                return;
            }

            soma += numero;
            contagem++;

            if (numero < menor) {
                menor = numero;
            }

            if (numero % 2 === 0) {
                pares++;
            }

            rl.question("Deseja continuar? (s/n): ", (resposta) => {
                if (resposta.toLowerCase() === "s") {
                    ler_dados(); // Continua lendo os dados
                } else {
                    const media = soma / contagem;
                    console.log(`Somatório: ${soma}`);
                    console.log(`Menor valor: ${menor}`);
                    console.log(`Média: ${media}`);
                    console.log(`Quantidade de valores pares: ${pares}`);
                    rl.close();
                }
            });
        });
    }

    ler_dados(); // Inicia a leitura dos dados
}

// Inicia o programa
calcular_valores();
