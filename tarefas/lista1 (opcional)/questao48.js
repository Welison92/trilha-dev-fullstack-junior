/*
48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades.
*/

// Função para combinar os inventários de duas lojas
function combinar_inventarios(inventarioLojaA, inventarioLojaB) {
    const inventario_combinado = {};

    // Adiciona os itens do inventário da loja A
    for (const item in inventarioLojaA) {
        inventario_combinado[item] = inventarioLojaA[item];
    }

    // Adiciona os itens do inventário da loja B
    for (const item in inventarioLojaB) {
        if (inventario_combinado[item]) {
            // Se o item já existe, soma as quantidades
            inventario_combinado[item] += inventarioLojaB[item];
        } else {
            // Se não existe, adiciona o item
            inventario_combinado[item] = inventarioLojaB[item];
        }
    }

    return inventario_combinado;
}

// Exemplo de uso
const inventarioLojaA = {
    camisetas: 10,
    calças: 5,
    sapatos: 2,
};

const inventarioLojaB = {
    camisetas: 3,
    calças: 7,
    bonés: 4,
};

const inventario_combinado = combinar_inventarios(
    inventarioLojaA,
    inventarioLojaB
);

console.log(inventario_combinado);
