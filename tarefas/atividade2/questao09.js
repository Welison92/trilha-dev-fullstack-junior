/*
9. Conversão Entre Formatos
Escreva duas funções:
- paresParaObjeto(pares) recebe um array de pares [ [chave,
valor], ... ] e retorna o objeto equivalente.
- objetoParaPares(obj) faz o inverso, retornando um array de
pares.
*/

// Função para converter um array de pares em um objeto
function paresParaObjeto(pares) {
    const obj = {};
    for (const [chave, valor] of pares) {
        obj[chave] = valor;
    }
    return obj;
}

// Função para converter um objeto em um array de pares
function objetoParaPares(obj) {
    const pares = [];
    for (const chave in obj) {
        if (obj.hasOwnProperty(chave)) {
            pares.push([chave, obj[chave]]);
        }
    }
    return pares;
}

// Exemplo de uso
const pares = [
    ["nome", "João"],
    ["idade", 30],
    ["cidade", "São Paulo"],
];
const objeto = paresParaObjeto(pares);
const paresConvertidos = objetoParaPares(objeto);

console.log(objeto);
console.log(paresConvertidos);
