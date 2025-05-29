/*
18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para ler os dados do funcionário
const ler_funcionario = () => {
    return new Promise((resolve) => {
        rl.question("Digite o nome do funcionário: ", (nome) => {
            rl.question("Digite o cargo do funcionário: ", (cargo) => {
                rl.question("Digite o salário do funcionário: ", (salario) => {
                    const funcionario = {
                        nome,
                        cargo,
                        salario: parseFloat(salario),
                    };
                    resolve(funcionario);
                });
            });
        });
    });
};

// Função principal
const main = async () => {
    console.log("Informe os dados do funcionário:");
    const funcionario = await ler_funcionario();
    rl.close();

    console.log("\nDados do Funcionário:");
    console.log(`Nome: ${funcionario.nome}`);
    console.log(`Cargo: ${funcionario.cargo}`);
    console.log(`Salário: R$${funcionario.salario.toFixed(2)}`);
};

// Executa a função principal
main().catch((error) => {
    console.error("Erro:", error);
    rl.close();
});
