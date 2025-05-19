/*
24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.
*/

// Função para criar a matriz M[1..6,1..8] com valores aleatórios
function criar_matriz() {
    let matriz = [];
    for (let i = 0; i < 6; i++) {
        matriz[i] = [];
        for (let j = 0; j < 8; j++) {
            // Valores entre -10 e 10
            matriz[i][j] = Math.floor(Math.random() * 21) - 10;
        }
    }
    return matriz;
}

// Função para contar os elementos negativos em cada linha da matriz
function contar_negativos(matriz) {
    let vetorC = [];
    for (let i = 0; i < matriz.length; i++) {
        let contador = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] < 0) {
                contador++;
            }
        }
        vetorC[i] = contador;
    }
    return vetorC;
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

let matriz = criar_matriz();
imprimir_matriz(matriz);
let vetor_c = contar_negativos(matriz);

console.log("Vetor C: " + vetor_c.join(" "));
