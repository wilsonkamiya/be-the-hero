// importando o modulo express para dentro da variavel express 
const express = require('express');
const cors = require('cors');
const routes = require('./routes'); //referencia o arquivo routes.js
const {errors} = require('celebrate');
//instanciando o express dentro da variavel app
const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/*
    rotaa / recurso
*/ 
/*
Metodos http:
GET= busca/lista uma informação do backend.
POST= Criar uma informação no backend.
PUT= Alterar uma informação no backend.
DELETE= Deletar uma informação no backend. 
*/  

/*
Tipos de parametros: 
QUERY PARAMS: Parametros nomeados enviados na rota apos "?" (Filtros, paginacao)
ROUTE PARAMS: Parametros utilizados para identificar recursos
REQUEST BODY: Corpo da requisição, utilizado para criar ou alterar recursos
*/ 

/*
SQL: Mysql, Sqlite, PostgreSql,Oracle, Microsoft sql server
NOSQL: MongoDB, Cassandra, Couchdb... etc
*/ 

/*
Driver: SELECT * FROM USERS
Query Builder: table('usuarios').select('*').where();    --knex (pacote utilizado dentro do node)    

*/ 

//fazendo a aplicação escutar/executar na porta 3333
//app.listen(3333);

module.exports = app;