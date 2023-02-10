# Desafio Port Louis

**Disclaimer: <br>**
>Essa aPI é um teste feito para aplicação de uma vaga como Desenvolvedor Back-end da empresa Port Louis.

## Descrição do projeto

Essa é uma RESTful API construída com NodeJS + Express. 

- Contexto<br>
Programa cuja execução cruza pedidos e notas gerando uma listagem de pedidos
pendentes

A aplicação dispõe das seguintes features:
+ Listar todos os pedidos;
+ Listar todas as notas;
+ Filtrar notas por parâmetros de rota;

## <a id="contatos">Contatos</a>
Caso queira entrar em contato comigo você pode me encontrar aqui:
+ E-mail: gabrielluizsouzavieira@gmail.com
+ LinkedIn: https://www.linkedin.com/in/gabrielluiz000/<br>
+ Discord: Gabriel Luiz#6182

![](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)

## Rodando a aplicação

### Pré-requisitos

- Para rodar a aplicação no seu dispositivo, você precisa de um ambiente com o NodeJs na versão 18 ou superior instalado e uma plataforma para o teste das requisições, como Postman ou Insomnia.

_Após clonar o repositório:_
- Você também deve criar um arquivo `.env` e informar as variáveis de ambiente como é sugerido no diretório `.env.example` informando o caminho das pastas de Pedidos e Notas de acordo com a organização em sua máquina para que a API consiga se conectar corretamente com as pastas.

### Instalando a aplicação

**Clonando o repositório**
```
$ git clone git@github.com:Lgabz/desafio-port-louis.git

$ cd desafio-port-louis
```
**Instalando as dependências**<br>

```
$ npm install
```

**Rodando o server da aplicação**<br>

```
$ npm run dev
```

## Rotas

Essa é a URL base da aplicação: http://localhost:3000/

### Listagem de Pedidos

- É nessa rota em que todos os pedidos são listados.

URL: http://localhost:3000/pedidos

| ENDPOINT | Method | Body Params | URL Params |
|----------|--------|-------------|------------|
|/pedidos|GET| X | x | 

Resposta em caso de sucesso:<br>
HTTP Status Code: 200<br>
Mensagem retornada:<br>
```
[
 [
   {
	 "número_item": 1,
	 "código_produto": "A22",
	 "quantidade_produto": 9,
	 "valor_unitário_produto": "10,00"
  },
  {
	 "número_item": 2,
	 "código_produto": "K13",
	 "quantidade_produto": 5,
	 "valor_unitário_produto": "15,00"}],
 [
   {
	 "número_item": 3,
	 "código_produto": "MR2",
	 "quantidade_produto": 10,
	 "valor_unitário_produto": "17,30"
  },
  {
	 "número_item": 4,
	 "código_produto": "SD9",
	 "quantidade_produto": 12,
	 "valor_unitário_produto": "5,00"}]
]
  
  ```
   Mensagem em caso de erro:
   
    HTTP Status Code: 400
   
  ```
 Mensagem retornada:<descrição do erro>
  ```
  
  ### Listagem de Notas

- É nessa rota em que todas as notas são listadas.

URL: http://localhost:3000/notas

| ENDPOINT | Method | Body Params | URL Params |
|----------|--------|-------------|------------|
|/notas|GET| X | x | 

Resposta em caso de sucesso:<br>
HTTP Status Code: 200<br>
Mensagem retornada:<br>
```
[
 [
   {
	 "id_pedido": 1,
	 "número_item": 4,
	 "quantidade_produto": 4"
  },
  {
	 "id_pedido": 1,
	 "número_item": 2,
	 "quantidade_produto": 5
  }
 ]
]
  
  ```
   Mensagem em caso de erro:
   
    HTTP Status Code: 400
   
  ```
 Mensagem retornada:<descrição do erro>
  ```
  
   ### Filtro de notas com parâmetros de rotas

- É nessa rota em que todas as notas são listadas usando os pares id_pedido e número_item nos parâmetros de rota como filtro de busca.

URL: http://localhost:3000/notas/search
- EX: http://localhost:3000/notas/search?id_pedido=5&número_item=1

| ENDPOINT | Method | Body Params | URL Params |
|----------|--------|-------------|------------|
|/notas/search|GET| X | id_pedido<br>número_item | 

Resposta em caso de sucesso:<br>
HTTP Status Code: 200<br>
Mensagem retornada:<br>
```
[
	{
		"id_pedido": 5,
		"número_item": 1,
		"quantidade_produto": 21
	},
	{
		"id_pedido": 5,
		"número_item": 1,
		"quantidade_produto": 20
	},
	{
		"id_pedido": 5,
		"número_item": 1,
		"quantidade_produto": 22
	}
]
  
  ```
   Mensagem em caso de erro:
   
    HTTP Status Code: 400
   
  ```
 Mensagem retornada:<descrição do erro>
  ```
