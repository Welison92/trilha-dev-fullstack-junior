/*
19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função para validar o horário
const validar_horario = (horario) => {
    const regex = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;
    return regex.test(horario);
};

// Função para ler os horários
const ler_horarios = (quantidade) => {
    return new Promise((resolve) => {
        const horarios = [];
        let contador = 0;

        const perguntar_horario = () => {
            if (contador < quantidade) {
                rl.question(
                    `Digite o horário ${contador + 1} (HH:MM:SS): `,
                    (horario) => {
                        if (validar_horario(horario)) {
                            horarios.push(horario);
                            contador++;
                        } else {
                            console.log("Horário inválido. Tente novamente.");
                        }
                        perguntar_horario();
                    }
                );
            } else {
                resolve(horarios);
            }
        };

        perguntar_horario();
    });
};

// Função principal
const main = async () => {
    const quantidade = 5;
    console.log(`Você irá informar ${quantidade} horários.`);
    const horarios = await ler_horarios(quantidade);
    rl.close();

    console.log("\nHorários informados:");
    horarios.forEach((horario) => {
        console.log(horario);
    });
};

// Executa a função principal
main().catch((error) => {
    console.error("Erro:", error);
    rl.close();
});
