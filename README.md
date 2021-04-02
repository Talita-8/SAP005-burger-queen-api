# Burger Queen - Back-end

## Índice

* [1. Sobre](#1-Sobre)
* [2. Resumo do projeto](#2-resumo-do-projeto)
*

## 1. Sobre


Finalizado o último projeto proposto pela Laboratória, com o intuito de nos introduzir aos conceitos básicos de Back-End.
Ao longo deste, utilizei para desenvolvê-lo: 
 - [X] Node.js
 - [X] Express
 - [X] Postman
 - [X] Sequelize
 - [X] Heroku integrado ao PostgreSQL 

![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/71895567/113440624-2bf03380-93c3-11eb-9965-e7aa7a49ce56.gif)

No projeto anterior, nós consumimos uma API com dados relacionados de um restaurante, eram eles: Usuário|Produtos|Pedidos
Aqui foi desenvolvida uma API com a mesma estrutura, inspirada nos dados acima mencionados.

## 2. Resumo do projeto

### Planejamento

Utilizei como ferramenta para organização o Github projects, associando cada tarefa a seu respectivo pull request. O modelo que escolhi foi o Kanban básico. 
![githubprojects](https://user-images.githubusercontent.com/71895567/113442071-bafe4b00-93c5-11eb-817f-ced4b89174f0.png)

Foi preciso também um fluxograma que representasse visualmente o banco de dados, facilitando o desenvolvimento da estrutura.
![Fluxogrma_banco](https://user-images.githubusercontent.com/71895567/113442477-7fb04c00-93c6-11eb-959a-74e0d87eda94.png)


### Desenvolvimento

Neste projeto desenvolvi um servidor web que serve `JSON` através de uma conexão `HTTP`.
Entendi como funciona o processo de desenvolvimento de uma API aplicando o modelo rest, além de conceitos como rotas, URLs, variáveis de ambiente e modelos de arquitetura.

A API possui os seguintes endpoints:

#### `/users`

* `GET /users`
* `GET /users/:uid`
* `POST /users`
* `PUT /users/:uid`
* `DELETE /users/:uid`

#### `/products`

* `GET /products`
* `GET /products/:productid`
* `POST /products`
* `PUT /products/:productid`
* `DELETE /products/:productid`

#### `/orders`

* `GET /orders`
* `GET /orders/:orderId`
* `POST /orders`
* `PUT /orders/:orderId`
* `DELETE /orders/:orderId`

Para testar as rotas utilizei o Postman, que ajudou a ter um "visual" das requisições
e também pude utilizá-lo para enviar dados através do _header_ e _body_.
![postman](https://user-images.githubusercontent.com/71895567/113446906-33b5d500-93cf-11eb-8960-b05abb3102d2.png)

## Futuras implementações

* Aprimorar retornos
* Apagar produto do pedido
* Incluir novo produto em um pedido existente
* Endpoint de autenticação: `POST /auth`
* Middleware de autenticação
* Middleware de erros
* Outros endpoints
* Criar a documentação da API
* Testes unitários para cada função
* Testes _"end to end"_ ou _e2e_ (de uma ponta a outra)
* Docker
