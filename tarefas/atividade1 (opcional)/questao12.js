/*
12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
*/

// Função para calcular os primeiros 10 elementos da Sequência de Fibonacci
function fibonacci() {
    let fib = [1, 1];

    for (let i = 2; i < 10; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    console.log(
        `Os 10 primeiros elementos da Sequência de Fibonacci são: \n${fib.join(
            ", "
        )}`
    );
}

// Chama a função para exibir os elementos
fibonacci();
