/*
16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
*/

// Função para gerar números aleatórios
const gerar_numeros_aleatorios = (quantidade, min, max) => {
    const numeros = [];
    for (let i = 0; i < quantidade; i++) {
        const numero = Math.floor(Math.random() * (max - min + 1)) + min;
        numeros.push(numero);
    }
    return numeros;
};

// Função para ordenar o vetor
const ordenar_vetor = (vetor) => {
    return vetor.sort((a, b) => a - b);
};

// Função principal
const main = () => {
    const quantidade = 20;
    const min = 0;
    const max = 99;

    // Gerar números aleatórios
    const numeros = gerar_numeros_aleatorios(quantidade, min, max);
    console.log("Números gerados:", numeros);

    // Ordenar o vetor
    const numeros_ordenados = ordenar_vetor(numeros);
    console.log("Números ordenados:", numeros_ordenados);
};

// Executa a função principal
main();
