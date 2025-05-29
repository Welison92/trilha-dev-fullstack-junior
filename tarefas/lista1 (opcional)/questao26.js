/*
26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5].
*/

// Função para calcular o produto elemento a elemento de duas matrizes A e B
function calcular_produto_matrizes(A, B) {
    const P = Array.from({ length: 3 }, () => Array(5).fill(0));

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 5; j++) {
            P[i][j] = A[i][j] * B[i][j];
        }
    }

    return P;
}

// Exemplo de uso
const A = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
];

const B = [
    [2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16],
];

const P = calcular_produto_matrizes(A, B);
console.log("Matriz A:");
console.log(A);
console.log("Matriz B:");
console.log(B);
console.log("Matriz Produto P:");
console.log(P);
