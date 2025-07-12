/*
22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para calcular as estatísticas
function calcular_estatisticas() {
    let total_salario = 0;
    let total_filhos = 0;
    let maior_salario = 0;
    let count = 0;
    let count_salario_baixo = 0;

    function perguntar() {
        rl.question(
            "Digite o salário (ou 'sair' para encerrar): ",
            (salario) => {
                if (salario.toLowerCase() === "sair") {
                    // Calcular e exibir os resultados
                    const media_salario = total_salario / count || 0;
                    const media_filhos = total_filhos / count || 0;
                    const percentual_salario_baixo =
                        (count_salario_baixo / count) * 100 || 0;

                    console.log(
                        `Média de salário: R$ ${media_salario.toFixed(2)}`
                    );
                    console.log(`Média de filhos: ${media_filhos.toFixed(2)}`);
                    console.log(`Maior salário: R$ ${maior_salario.toFixed(2)}`);
                    console.log(
                        `Percentual de pessoas com salário até R$ 350,00: ${
                            percentual_salario_baixo.toFixed(2)}%`
                    );

                    rl.close();
                } else {
                    const salario_num = parseFloat(salario);
                    if (isNaN(salario_num)) {
                        console.log(
                            "Por favor, digite um número válido ou 'sair' para encerrar."
                        );
                        perguntar();
                        return;
                    }

                    rl.question("Digite o número de filhos: ", (filhos) => {
                        const filhos_num = parseInt(filhos);
                        if (isNaN(filhos_num)) {
                            console.log("Por favor, digite um número válido.");
                            perguntar();
                            return;
                        }

                        // Atualizar as estatísticas
                        total_salario += salario_num;
                        total_filhos += filhos_num;
                        maior_salario = Math.max(maior_salario, salario_num);
                        if (salario_num <= 350) {
                            count_salario_baixo++;
                        }
                        count++;

                        perguntar(); // Perguntar novamente
                    });
                }
            }
        );
    }

    perguntar(); // Iniciar o processo
}

// Chama a função para iniciar a leitura dos dados
calcular_estatisticas();
