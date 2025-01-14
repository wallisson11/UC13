# API de Carros - WebAPI

Esta é uma API RESTful desenvolvida para o gerenciamento de informações de carros, utilizado **Node.js** e **Express**. A API permite criar, ler, atualizar e excluir carros, com validação dos dados utilizando a biblioteca **Joi**.

Este é um projeto inicial de CRUD (Create, Read, Update, Delete), que será expandido no futuro. Este é apenas o escopo incial.

## Funcionalidades

- **GET /**: Retorna a lista completa de carros.
- **GET /:sigla**: Retorna as informações de um carro específico, identificado pela sigla.
- **POST /**: Adiciona um novo carro à lista.
- **PUT /:sigla**: Atualiza as informações de um carro específico, identificado pela sigla.
- **DELETE /:sigla**: Remove um carro específico pela sigla.

## Estrutura do Projeto

- **app.js**: Arquivo principal que configura o servidor Express e as rotas da API.
- **tabelacarros.js**: Contém a lista de carros (dados fictícios).
- **validacao.js**: Contém as validações Joi para os dados dos carros.

## Endpoints

### 1. **GET /**

Retorna a lista completa de carros disponíveis.

### Exemplo de Resposta:

```json
[
 {
    "nome": "Ferrari",
    "sigla": "FER",
    "velocidadeMaxima": 340,
    "potencia": 800,
    "consumo": 5.5,
    "aceleracao": 2.9,
    "preco": 300000
 },
 {
   "nome": "Lamborghini",
   "sigla":"LAM",
   "velocidadeMaxima": 355,
   "potencia": 770,
   "consumo": 6.2,
   "aceleracao": 2.8,
   "preco": 330000
 }
]
```

### 2. **GET /:sigla**

Retorna as informações de um carro específicico, identificado pela sigla.

### Exemplo de Requisição:

`GET /FER`

### Exemplo de Resposta:

```json
{
   "nome": "Ferrari",
   "sigla": "FER",
   "velocidadeMaxima": 340,
   "potencia": 800,
   "consumo": 5.5,
   "aceleracao": 2.9,
   "preco": 300000
}
```
1. **Clone este repositorio:**

```bash

git clone https://github.com/seu-usuario/nome-do-repositorio.git
```
2. **Instale as dependencias:**

Navegue até o diretorio do projetoe execute o comando:

```bash
npm install
```
3. **inicie o servidor**
Após a instalação das dependencias, inicie o servidor:

```bash
node./app.js

4. **Acesse a API**

A API está disponivel em [http://localhost:3000]

## Validações 

Os dados enviados para API são validados com **Joi** para garantir que todos os campos sejam fornecidos corretamente. As validações incluem:

- O nome do carro deve ter pelo menos 3 caracteres.
- A sigla deve ter exatamente 3 caracteres.
- A potência, velociadade máxima, consumo, acelaração e preço devem ser números validos.
- Durante a atualização, pelo menos um campo precisa ser fornecidos.