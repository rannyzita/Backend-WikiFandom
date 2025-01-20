const express = require("express");
const cors = require("cors");
const routeUsuario = require("./routes/UsuarioRoute.js");
const routeHistorico = require("./routes/HistoricoRoute.js")
const routeImagem = require("./routes/ImagemRoute.js");
const routePost = require("./routes/PostRoute.js");
const routeGaleria = require("./routes/GaleriaRoute.js");
<<<<<<< HEAD
const routeFavorito = require("./routes/PostFavorito.js");
=======
const routeFavorito = require("./routes/PostFavoritoRoute.js");
>>>>>>> b810903d77342b2cf57835a932888a1db19efb94
const routeComentario = require("./routes/ComentarioRoute.js");
const routeNoticia = require("./routes/NoticiaRoute.js");
const app = express();


app.use(express.json());

// Middleware
app.use(cors());

// Rotas
app.use(routeUsuario);
app.use(routeHistorico);
app.use(routeImagem);
app.use(routePost);
app.use(routeGaleria);
app.use(routeFavorito);
app.use(routeComentario);
app.use(routeNoticia);

// Iniciar o servidor
const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

