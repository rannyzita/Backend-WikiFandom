const express = require("express");
const cors = require("cors");
const routes = require("./routes.js");
const knex = require('./db/connection.js');
const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

// Iniciar o servidor
const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

