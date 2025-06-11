/*
3. Palavras Únicas
Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite uma string: ", (input) => {
    // Divide a string em palavras
    const words = input.split(" ");
    let unique_words = [];

    // Loop para verificar palavras únicas
    for (let i = 0; i < words.length; i++) {
        let is_unique = true;

        // Verifica se a palavra já está no array unique_words
        for (let j = 0; j < unique_words.length; j++) {
            if (words[i].toLowerCase() === unique_words[j].toLowerCase()) {
                is_unique = false;
                break;
            }
        }

        // Se a palavra for única, adiciona ao array
        if (is_unique && words[i] !== "") {
            unique_words.push(words[i]);
        }
    }

    console.log("Palavras únicas:", unique_words);
    rl.close();
});
