/*
23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos.
*/

// Função para criar a matriz identidade
function matriz_identidade(n) {
    let matriz = [];

    for (let i = 0; i < n; i++) {
        matriz[i] = [];
        for (let j = 0; j < n; j++) {
            if (i === j) {
                matriz[i][j] = 1;
            } else {
                matriz[i][j] = 0;
            }
        }
    }

    return matriz;
}

// Função para imprimir a matriz
function imprimir_matriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        let linha = "";
        for (let j = 0; j < matriz[i].length; j++) {
            linha += matriz[i][j] + " ";
        }
        console.log(linha);
    }
}

// Exemplo de uso
let n = 7;
let matriz = matriz_identidade(n);
imprimir_matriz(matriz);
