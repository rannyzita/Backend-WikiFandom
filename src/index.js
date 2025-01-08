const express = require("express");
const cors = require("cors");
const routeUsuario = require("./routes/UsuarioRoute.js");
const app = express();
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

app.use(cors());

app.use(express.json());
app.use("/api/usuarios", routeUsuario);

app.use(routeUsuario);

app.listen(3333);

