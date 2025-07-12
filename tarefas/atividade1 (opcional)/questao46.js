/*
46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.
*/

// Função para sumarizar vendas por vendedor
function sumarizar_vendas_vendedor(vendas) {
    return vendas.reduce((acc, venda) => {
        const { vendedor, valor } = venda;
        if (!acc[vendedor]) {
            acc[vendedor] = 0;
        }
        acc[vendedor] += valor;
        return acc;
    }, {});
}

// Exemplo de uso:
const vendas = [
    { vendedor: "Alice", valor: 100 },
    { vendedor: "Bob", valor: 200 },
    { vendedor: "Alice", valor: 150 },
    { vendedor: "Bob", valor: 300 },
];

const resultado = sumarizar_vendas_vendedor(vendas);

console.log(resultado);
