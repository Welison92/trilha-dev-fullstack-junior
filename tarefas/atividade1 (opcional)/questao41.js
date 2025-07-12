/*
41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade.
*/

const pessoa = {
    nome: "João",
    idade: 30,
};

// Acessando e imprimindo o valor de idade
console.log(pessoa.idade);

// Adicionando uma nova propriedade chamada email
pessoa.email = "exemplo@gmail.com";

// Imprimindo o objeto atualizado
console.log(pessoa);
