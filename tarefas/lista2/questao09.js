/*
9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para calcular o total de salários
function calcular_salarios() {
    let total_homens = 0;
    let total_mulheres = 0;

    function ler_dados() {
        rl.question("Digite o salário do funcionário: R$ ", (input_salario) => {
            const salario = parseFloat(input_salario);

            if (isNaN(salario) || salario < 0) {
                console.log("Por favor, insira um salário válido.");
                ler_dados(); // Reinicia a função
                return;
            }

            rl.question("Digite o sexo do funcionário (M/F): ", (sexo) => {
                if (sexo.toUpperCase() === "M") {
                    total_homens += salario;
                } else if (sexo.toUpperCase() === "F") {
                    total_mulheres += salario;
                } else {
                    console.log("Sexo inválido. Por favor, insira M ou F.");
                    ler_dados(); // Reinicia a função
                    return;
                }

                rl.question("Deseja continuar? (s/n): ", (resposta) => {
                    if (resposta.toLowerCase() === "s") {
                        ler_dados(); // Continua lendo os dados
                    } else {
                        console.log(
                            `Total de salários pagos aos homens: R$ ${total_homens.toFixed(
                                2
                            )}`
                        );
                        console.log(
                            `Total de salários pagos às mulheres: R$ ${total_mulheres.toFixed(
                                2
                            )}`
                        );
                        rl.close();
                    }
                });
            });
        });
    }

    // Inicia a leitura dos dados
    ler_dados();
}

// Inicia o programa
calcular_salarios();
