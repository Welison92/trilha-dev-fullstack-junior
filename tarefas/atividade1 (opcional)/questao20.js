/*
20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS).
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para ler os dados dos funcionários
const ler_funcionarios = (quantidade) => {
    return new Promise((resolve) => {
        const funcionarios = [];
        let contador = 0;

        const perguntar_dados = () => {
            if (contador < quantidade) {
                rl.question(
                    `Digite a matrícula do funcionário ${contador + 1}: `,
                    (matricula) => {
                        rl.question(
                            `Digite o nome do funcionário ${contador + 1}: `,
                            (nome) => {
                                rl.question(
                                    `Digite o salário bruto do funcionário ${
                                        contador + 1
                                    }: `,
                                    (salario_bruto) => {
                                        const funcionario = {
                                            matricula,
                                            nome,
                                            salario_bruto:
                                                parseFloat(salario_bruto),
                                        };
                                        funcionarios.push(funcionario);
                                        contador++;
                                        perguntar_dados();
                                    }
                                );
                            }
                        );
                    }
                );
            } else {
                resolve(funcionarios);
            }
        };

        perguntar_dados();
    });
};

// Função para calcular o desconto do INSS
const calcular_inss = (salario_bruto) => {
    return salario_bruto * 0.12; // 12% de desconto
};

// Função para calcular o salário líquido
const calcular_salario_liquido = (salario_bruto, inss) => {
    return salario_bruto - inss;
};

// Função principal
const main = async () => {
    const quantidade = 80;
    console.log(`Você irá informar os dados de ${quantidade} funcionários.`);
    const funcionarios = await ler_funcionarios(quantidade);
    rl.close();

    console.log("\nContracheques dos Funcionários:");
    funcionarios.forEach((funcionario) => {
        const inss = calcular_inss(funcionario.salario_bruto);
        const salarioLiquido = calcular_salario_liquido(
            funcionario.salario_bruto,
            inss
        );

        console.log("\n---------------------------------");
        console.log(`Matrícula: ${funcionario.matricula}`);
        console.log(`Nome: ${funcionario.nome}`);
        console.log(`Salário bruto: R$${funcionario.salario_bruto.toFixed(2)}`);
        console.log(`Dedução INSS: R$${inss.toFixed(2)}`);
        console.log(`Salário líquido: R$${salarioLiquido.toFixed(2)}`);
        console.log("---------------------------------");
    });
};

// Executa a função principal
main().catch((error) => {
    console.error("Erro:", error);
    rl.close();
});
