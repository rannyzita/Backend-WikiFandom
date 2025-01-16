const express = require("express");
const cors = require("cors");
const routeUsuario = require("./routes/UsuarioRoute.js");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/usuarios", routeUsuario);

// Iniciar o servidor
const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

