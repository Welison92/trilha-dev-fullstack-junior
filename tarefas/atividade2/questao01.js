/*
1. Validação de Datas
Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
formarem uma data real (meses de 28–31 dias, ano bissexto para
fevereiro) e false caso contrário.
*/

// Função para validar se uma data é válida
function ehDataValida(dia, mes, ano) {
    if (ano < 1 || mes < 1 || mes > 12 || dia < 1) {
        return false;
    }

    const diasPorMes = [
        31,
        ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0) ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
    ];

    return dia <= diasPorMes[mes - 1];
}

// Exemplos de uso e testes da função ehDataValida
const exemplos = [
    { dia: 29, mes: 2, ano: 2020, resultado: true },
    { dia: 29, mes: 2, ano: 2021, resultado: false },
    { dia: 31, mes: 4, ano: 2021, resultado: false },
    { dia: 31, mes: 12, ano: 2021, resultado: true },
    { dia: 30, mes: 6, ano: 2021, resultado: true },
    { dia: 31, mes: 11, ano: 2021, resultado: false },
    { dia: 1, mes: 1, ano: 2021, resultado: true },
    { dia: 31, mes: 2, ano: 2021, resultado: false },
    { dia: 0, mes: 1, ano: 2021, resultado: false },
    { dia: 1, mes: 13, ano: 2021, resultado: false },
    { dia: 31, mes: -1, ano: -1, resultado: false },
    { dia: 31, mes: 0, ano: -1, resultado: false },
    { dia: 31, mes: 1, ano: -1, resultado: true },
    { dia: 30, mes: -2, ano: -1, resultado: false },
];

for (const exemplo of exemplos) {
    const { dia, mes, ano, resultado } = exemplo;
    const validacao = ehDataValida(dia, mes, ano);
    console.log(
        `ehDataValida(${dia}, ${mes}, ${ano}) = ${validacao} (esperado: ${resultado})`
    );
}
