const express = require("express");
const cors = require("cors");
const routeUsuario = require("./routes/UsuarioRoute.js");
const routeHistorico = require("./routes/HistoricoRoute.js")
const app = express();


app.use(express.json());

// Middleware
app.use(cors());

// Rotas
app.use(routeUsuario);
app.use(routeHistorico);

// Iniciar o servidor
const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

