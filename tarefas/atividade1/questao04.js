/*
4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para exibir o menu e processar a escolha do usuário
function exibir_menu() {
    console.log("Escolha uma opção:");
    console.log("1. Opção 1: Exibir mensagem de boas-vindas");
    console.log("2. Opção 2: Calcular a soma de dois números");
    console.log("3. Opção 3: Sair");

    rl.question("Digite o número da opção desejada: ", (opcao) => {
        switch (opcao) {
            case "1":
                console.log("Bem-vindo ao nosso programa!");
                exibir_menu(); // Chama novamente o menu
                break;
            case "2":
                rl.question("Digite o primeiro número: ", (num1) => {
                    rl.question("Digite o segundo número: ", (num2) => {
                        const soma = parseFloat(num1) + parseFloat(num2);
                        console.log(`A soma é: ${soma}`);
                        exibir_menu(); // Chama novamente o menu
                    });
                });
                break;
            case "3":
                console.log("Saindo do programa...");
                rl.close();
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                exibir_menu(); // Chama novamente o menu
        }
    });
}

// Inicia o menu
exibir_menu();
