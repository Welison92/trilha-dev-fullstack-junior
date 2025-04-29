## Pré-requisitos

-   **Node.js**: Certifique-se de ter o Node.js instalado (versão 14 ou superior recomendada). Você pode baixá-lo em [nodejs.org](https://nodejs.org/) ou instalá-lo via gerenciador de pacotes como `nvm`.

## Configuração do Projeto

1. **Clone ou crie o projeto**:

    - Clone o repositório ou crie um novo diretório para o projeto. Você pode usar o seguinte comando para clonar o repositório:
        ```bash
           git clone https://github.com/Welison92/trilha-dev-fullstack-junior.git
        ```

2. **Instale as dependências**:

-   Execute o seguinte comando para instalar as dependências necessárias:
    ```bash
    npm install
    ```
-   Isso instalará as dependências listadas no arquivo `package.json` do projeto. O comando `npm install` lê o arquivo `package.json` e instala todas as dependências necessárias para o projeto.
-   Se você estiver criando um novo projeto e não tiver um arquivo `package.json`, pode criar um usando o comando `npm init -y`, que criará um arquivo básico com as configurações padrão.

3. **Configure o arquivo package.json**:

-   Certifique-se de que o arquivo `package.json` esteja configurado corretamente com `"type": "module"` para permitir o uso de módulos ES6. Aqui está um exemplo básico de como o arquivo `package.json` deve se parecer:

```json
{
    "name": "trilha-dev-fullstack-junior",
    "version": "1.0.0",
    "description": "",
    "type": "module",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
        "readline": "^1.3.0"
    }
}
```

-   Certifique-se de que o campo `"type"` esteja definido como `"module"` para permitir o uso de módulos ES6.
-   Você pode criar o arquivo `package.json` manualmente ou usar o comando `npm init -y` para gerar um arquivo básico e, em seguida, adicionar `"type": "module"`.

4. **Execute o projeto**:

-   Após instalar as dependências, você pode executar o projeto usando o seguinte comando:
    ```bash
    node nome_arquivo.js
    ```
-   Isso iniciará o arquivo JavaScript e permitirá que você interaja com ele no console.
-   Certifique-se de substituir `nome_arquivo.js` pelo nome do arquivo JavaScript que contém o código do projeto.
