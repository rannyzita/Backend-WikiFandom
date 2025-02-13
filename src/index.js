const express = require("express");
const cors = require("cors");
const routes = require("./routes.js");
const knex = require('./db/connection.js');
require('dotenv').config();
const app = express();

// -- tem que adicionar os cookies pq se nao na parte do front nao vai dar acesso na hora de acessar a porta --
// fora q no front a porta que tá usando é 5730 por aí
const corsConfig = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], 
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Length', 'X-Response-Time'], 
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204 
}
//docs api
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors(corsConfig));

app.use(express.json());


app.use(routes);

// Iniciar o servidor
const PORT = 3333;
app.listen(PORT, process.env.HOST || '0.0.0.0',() => {
    console.log(`Servidor rodando na porta ${PORT}`);
});