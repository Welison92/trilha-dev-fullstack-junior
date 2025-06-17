/*
7. Mapeamento e Ordenação
Dado um array produtos = [{ nome, preco }, ...], crie uma função que
retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort.
*/

const produtos = [
    { nome: "Produto A", preco: 30 },
    { nome: "Produto B", preco: 20 },
    { nome: "Produto C", preco: 50 },
    { nome: "Produto D", preco: 10 },
    { nome: "Produto E", preco: 40 },
];

//  Função para obter os nomes dos produtos ordenados por preço
function obter_nomes_ordenados_preco(produtos) {
    return produtos
        .map((produto) => produto.nome) // Mapeia para obter apenas os nomes
        .sort((a, b) => {
            const preco_a = produtos.find(
                (produto) => produto.nome === a
            ).preco;
            const preco_b = produtos.find(
                (produto) => produto.nome === b
            ).preco;
            return preco_a - preco_b; // Ordena por preço crescente
        });
}

// Chamada da função e exibição do resultado
const nomes_ordenados = obter_nomes_ordenados_preco(produtos);

console.log(nomes_ordenados);
