/*
6. Memoization
Implemente function memoize(fn) que armazene em cache chamadas
anteriores de fn (por argumentos), retornando resultados instantâneos em
repetidas invocações.
*/

function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// Testes
const slow_function = (x) => {
    // Simula uma função lenta
    for (let i = 0; i < 1e6; i++);
    return x * 2;
};

const memoized_slow_function = memoize(slow_function);

// Chamadas de teste
console.log(memoized_slow_function(5)); // Calcula e retorna 10
console.log(memoized_slow_function(5)); // Retorna 10 do cache
console.log(memoized_slow_function(10)); // Calcula e retorna 20
console.log(memoized_slow_function(10)); // Retorna 20 do cache
