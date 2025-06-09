/*
49. Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
*/

// Função para agrupar transações por categoria e calcular o subtotal
function agrupar_transacoes_categoria(transacoes) {
    const categorias = {};

    transacoes.forEach((transacao) => {
        const { categoria, valor } = transacao;

        // Se a categoria não existe, inicializa com um array vazio e subtotal 0
        if (!categorias[categoria]) {
            categorias[categoria] = {
                transacoes: [],
                subtotal: 0,
            };
        }
        // Adiciona a transação à categoria
        categorias[categoria].transacoes.push(transacao);

        // Atualiza o subtotal da categoria
        categorias[categoria].subtotal += valor;
    });
    return categorias;
}

// Exemplo de uso
const transacoes = [
    { id: 1, valor: 100, data: "2023-01-01", categoria: "Alimentação" },
    { id: 2, valor: 200, data: "2023-01-02", categoria: "Transporte" },
    { id: 3, valor: 150, data: "2023-01-03", categoria: "Alimentação" },
    { id: 4, valor: 50, data: "2023-01-04", categoria: "Saúde" },
    { id: 5, valor: 300, data: "2023-01-05", categoria: "Transporte" },
];

const resultado = agrupar_transacoes_categoria(transacoes);

console.log(resultado);
