/*
43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos.
*/

const obj1 = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo",
};

const obj2 = {
    idade: 25,
    profissao: "Engenheiro",
    cidade: "Rio de Janeiro",
};

// Função que combina as propriedades de dois objetos
function combinar_objetos(obj1, obj2) {
    const novo_objeto = { ...obj1, ...obj2 };
    return novo_objeto;
}

// Chamada da função e exibição do resultado
const resultado = combinar_objetos(obj1, obj2);

console.log(resultado);
