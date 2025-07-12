/*
8. Agrupamento por Propriedade
Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
cada chave é um cliente e o valor é a soma de todos os seus total.
*/

const vendas = [
    { cliente: "João", total: 100 },
    { cliente: "Maria", total: 200 },
    { cliente: "João", total: 150 },
    { cliente: "Ana", total: 300 },
    { cliente: "Maria", total: 100 },
    { cliente: "Ana", total: 200 },
];
const resultado = vendas.reduce((acc, venda) => {
    acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
    return acc;
}, {});

console.log(resultado);
