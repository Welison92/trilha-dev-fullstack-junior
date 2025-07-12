/*
6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou equilátero.

Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo equilátero: possui todos os lados iguais (A=B e B=C)
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para verificar se os lados formam um triângulo e determinar o tipo
function verificar_triangulo(a, b, c) {
    // Verifica se os lados formam um triângulo
    if (a < b + c && b < a + c && c < a + b) {
        // Verifica o tipo de triângulo
        if (a === b && b === c) {
            return "Equilátero";
        } else if (a === b || a === c || b === c) {
            return "Isósceles";
        } else {
            return "Escaleno";
        }
    } else {
        return "Os lados fornecidos não formam um triângulo.";
    }
}

// Solicita ao usuário que digite os lados do triângulo
rl.question("Digite o lado A: ", (lado_a) => {
    rl.question("Digite o lado B: ", (lado_b) => {
        rl.question("Digite o lado C: ", (lado_c) => {
            const tipo_triangulo = verificar_triangulo(
                parseFloat(lado_a),
                parseFloat(lado_b),
                parseFloat(lado_c)
            );
            console.log(`Tipo de triângulo: ${tipo_triangulo}`);
            rl.close();
        });
    });
});
