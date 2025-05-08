/*
4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para verificar se é possível formar um triângulo
function pode_formar_triangulo(a, b, c) {
    return a < b + c && b < a + c && c < a + b;
}

// Solicita ao usuário que digite os comprimentos dos segmentos de reta
rl.question(
    "Digite o comprimento do primeiro segmento de reta: ",
    (input_a) => {
        rl.question(
            "Digite o comprimento do segundo segmento de reta: ",
            (input_b) => {
                rl.question(
                    "Digite o comprimento do terceiro segmento de reta: ",
                    (input_c) => {
                        const a = parseFloat(input_a);
                        const b = parseFloat(input_b);
                        const c = parseFloat(input_c);

                        if (
                            isNaN(a) ||
                            isNaN(b) ||
                            isNaN(c) ||
                            a <= 0 ||
                            b <= 0 ||
                            c <= 0
                        ) {
                            console.log(
                                "Por favor, digite números válidos e maiores que zero."
                            );
                        } else {
                            if (pode_formar_triangulo(a, b, c)) {
                                console.log(
                                    "É possível formar um triângulo com esses segmentos."
                                );
                            } else {
                                console.log(
                                    "Não é possível formar um triângulo com esses segmentos."
                                );
                            }
                        }

                        rl.close();
                    }
                );
            }
        );
    }
);
