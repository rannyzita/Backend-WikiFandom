const express = require("express");
const cors = require("cors");
const routes = require("./routes.js");
const knex = require('./db/connection.js');
require('dotenv').config();
const app = express();

//docs api
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use(cors({
    origin: '*',    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], 
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Length', 'X-Response-Time'], 
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204 
}));

app.use(routes);

// Iniciar o servidor
const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});