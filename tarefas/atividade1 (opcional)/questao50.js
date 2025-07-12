/*
50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
1. Estrutura de Dados:
○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
cidade, quartos totais e quartos disponiveis.
○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
nomeCliente.
2. Funcionalidades:
○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
disponíveis em uma cidade específica.
○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
deve diminuir o número de quartos disponiveis do hotel.
○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
aumentar o número de quartos disponiveis no hotel correspondente.
○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
cliente.
3. Regras de Negócio:
○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
○ As reservas devem ser identificadas por um ID único e associadas a um
único hotel.

4. Desafios Adicionais (Opcionais):
○ Implementar uma função de check-in e check-out que atualize a
disponibilidade de quartos.
○ Gerar relatórios de ocupação para um hotel.
○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
avaliações dentro do objeto do hotel.
*/

import readline from "readline";

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Estrutura de dados para armazenar hotéis e reservas
const hoteis = [];
const reservas = [];

// Função para adicionar um novo hotel
function adicionar_hotel() {
    rl.question("Digite o nome do hotel: ", (nome) => {
        rl.question("Digite a cidade do hotel: ", (cidade) => {
            rl.question(
                "Digite o número total de quartos: ",
                (quartos_totais) => {
                    const hotel = {
                        id: hoteis.length + 1,
                        nome,
                        cidade,
                        quartos_totais: parseInt(quartos_totais),
                        quartos_disponiveis: parseInt(quartos_totais),
                    };
                    hoteis.push(hotel);
                    console.log(`Hotel ${nome} adicionado com sucesso!`);
                    menu_principal();
                }
            );
        });
    });
}

// Função para buscar hotéis por cidade
function buscar_hoteis_cidade() {
    rl.question("Digite a cidade para buscar hotéis: ", (cidade) => {
        const hoteis_encontrados = hoteis.filter(
            (hotel) => hotel.cidade.toLowerCase() === cidade.toLowerCase()
        );
        if (hoteis_encontrados.length > 0) {
            console.log("Hotéis encontrados:");
            hoteis_encontrados.forEach((hotel) => {
                console.log(
                    `ID: ${hotel.id}, Nome: ${hotel.nome}, Quartos Disponíveis: ${hotel.quartos_disponiveis}`
                );
            });
        } else {
            console.log("Nenhum hotel encontrado nessa cidade.");
        }
        menu_principal();
    });
}

// Função para fazer uma reserva
function fazer_reserva() {
    rl.question("Digite o ID do hotel para fazer a reserva: ", (idHotel) => {
        const hotel = hoteis.find((h) => h.id === parseInt(idHotel));
        if (hotel && hotel.quartos_disponiveis > 0) {
            rl.question("Digite o nome do cliente: ", (nomeCliente) => {
                const reserva = {
                    idReserva: reservas.length + 1,
                    idHotel: hotel.id,
                    nomeCliente,
                };
                reservas.push(reserva);
                hotel.quartos_disponiveis -= 1; // Diminui o número de quartos disponíveis
                console.log(
                    `Reserva feita com sucesso! ID da reserva: ${reserva.idReserva}`
                );
                menu_principal();
            });
        } else {
            console.log("Hotel não encontrado ou sem quartos disponíveis.");
            menu_principal();
        }
    });
}

// Função para cancelar uma reserva
function cancelar_reserva() {
    rl.question("Digite o ID da reserva para cancelar: ", (idReserva) => {
        const reserva = reservas.find(
            (r) => r.idReserva === parseInt(idReserva)
        );
        if (reserva) {
            const hotel = hoteis.find((h) => h.id === reserva.idHotel);
            hotel.quartos_disponiveis += 1; // Aumenta o número de quartos disponíveis
            reservas.splice(reservas.indexOf(reserva), 1); // Remove a reserva
            console.log(`Reserva ${idReserva} cancelada com sucesso!`);
        } else {
            console.log("Reserva não encontrada.");
        }
        menu_principal();
    });
}

// Função para listar todas as reservas
function listar_reservas() {
    if (reservas.length > 0) {
        console.log("Reservas:");
        reservas.forEach((reserva) => {
            const hotel = hoteis.find((h) => h.id === reserva.idHotel);
            console.log(
                `ID Reserva: ${reserva.idReserva}, Hotel: ${hotel.nome}, Cliente: ${reserva.nomeCliente}`
            );
        });
    } else {
        console.log("Nenhuma reserva encontrada.");
    }
    menu_principal();
}

// Função para exibir o menu principal
function menu_principal() {
    console.log("\nMenu Principal:");
    console.log("1. Adicionar Hotel");
    console.log("2. Buscar Hotéis por Cidade");
    console.log("3. Fazer Reserva");
    console.log("4. Cancelar Reserva");
    console.log("5. Listar Reservas");
    console.log("6. Sair");

    rl.question("Escolha uma opção: ", (opcao) => {
        switch (opcao) {
            case "1":
                adicionar_hotel();
                break;
            case "2":
                buscar_hoteis_cidade();
                break;
            case "3":
                fazer_reserva();
                break;
            case "4":
                cancelar_reserva();
                break;
            case "5":
                listar_reservas();
                break;
            case "6":
                rl.close();
                break;
            default:
                console.log("Opção inválida, tente novamente.");
                menu_principal();
        }
    });
}

// Inicia o menu principal
menu_principal();
