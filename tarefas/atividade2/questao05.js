/*
5. Debounce
Crie function debounce(fn, delay) que receba uma função fn e um delay
em ms, retornando uma nova função que só executa fn se não for
chamada novamente dentro do intervalo.
*/

function debounce(fn, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// Testes
const log_message = (message) => {
    console.log(message);
};

const debounced_log = debounce(log_message, 1000);

// Chamadas de teste
debounced_log("Mensagem 1");
setTimeout(() => {
    debounced_log("Mensagem 2");
}, 500);
setTimeout(() => {
    debounced_log("Mensagem 3");
}, 1500);
setTimeout(() => {
    debounced_log("Mensagem 4");
}, 2000);
