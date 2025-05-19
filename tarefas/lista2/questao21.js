/*
21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para calcular o peso ideal
function peso_ideal(altura, sexo) {
    if (sexo === "M") {
        return 72.7 * altura - 58;
    } else if (sexo === "F") {
        return 62.1 * altura - 44.7;
    } else {
        return "Sexo inválido. Use 'M' para masculino ou 'F' para feminino.";
    }
}

// Função para ler os dados do usuário
function ler_dados() {
    rl.question("Digite a altura (em metros): ", (altura) => {
        rl.question("Digite o sexo (M/F): ", (sexo) => {
            const resultado = peso_ideal(
                parseFloat(altura),
                sexo.toUpperCase()
            );
            console.log(`O peso ideal é: ${resultado.toFixed(2)} kg`);
            rl.close();
        });
    });
}

// Chama a função para iniciar a leitura dos dados
ler_dados();
