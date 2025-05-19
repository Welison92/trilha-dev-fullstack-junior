/*
25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente.
*/

// Função para ler a matriz
function ler_matriz(linhas, colunas) {
    const matriz = [];
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.floor(Math.random() * 100); // Valores entre 0 e 99
        }
    }
    return matriz;
}

// Função para calcular a soma de cada coluna
function somar_colunas(matriz) {
    const colunas = matriz[0].length;
    const soma_colunas = new Array(colunas).fill(0);

    for (let j = 0; j < colunas; j++) {
        for (let i = 0; i < matriz.length; i++) {
            soma_colunas[j] += matriz[i][j];
        }
    }
    return soma_colunas;
}

// Função para imprimir a matriz
function imprimir_matriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(" "));
    }
}

// Função principal
function main() {
    const linhas = 15;
    const colunas = 20;

    // Ler a matriz
    const matriz = ler_matriz(linhas, colunas);

    // Imprimir a matriz
    console.log("Matriz:");
    imprimir_matriz(matriz);

    // Calcular a soma de cada coluna
    const soma_colunas = somar_colunas(matriz);

    // Imprimir a soma de cada coluna
    console.log("\nSoma de cada coluna:");
    for (let j = 0; j < soma_colunas.length; j++) {
        console.log(`Coluna ${j + 1}: ${soma_colunas[j]}`);
    }
}

// Executar a função principal
main();
