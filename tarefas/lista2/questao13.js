/*
13. Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci.
*/

const fibonacci = (n) => {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
};

const n = 15;
const fibSequence = fibonacci(n);
console.log(`Os primeiros ${n} elementos da sequência de Fibonacci são:`);
for (let i = 0; i < n; i++) {
    console.log(fibSequence[i]);
}
