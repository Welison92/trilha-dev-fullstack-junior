/*
15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.
*/

// Função para gerar e imprimir os primeiros 10 números da sequência de Fibonacci
function fibonacci() {
    let num1 = 0,
        num2 = 1,
        proximoTermo;
    const quantidade = 10; // Número de termos a serem gerados

    console.log("Sequência de Fibonacci:");

    for (let i = 1; i <= quantidade; i++) {
        console.log(num1); // Imprime o termo atual
        proximoTermo = num1 + num2; // Calcula o próximo termo
        num1 = num2; // Atualiza o primeiro número
        num2 = proximoTermo; // Atualiza o segundo número
    }
}

// Chama a função para gerar e imprimir a sequência de Fibonacci
fibonacci();
