const express = require("express");

const authMiddleware = require("./middlewares/auth.js");

const authController = require("./controllers/AuthController.js");
const routeUsuario = require("./routes/UsuarioRoute.js");
const routeHistorico = require("./routes/HistoricoRoute.js")
const routeImagem = require("./routes/ImagemRoute.js");
const routePost = require("./routes/PostRoute.js");
const routeGaleria = require("./routes/GaleriaRoute.js");
const routeFavorito = require("./routes/PostFavoritoRoute.js");
const routeComentario = require("./routes/ComentarioRoute.js");
const routeNoticia = require("./routes/NoticiaRoute.js");

const router = express.Router();

router.post('/registro', authController.registro);
router.post('/login', authController.login);

router.use(authMiddleware);

// Rotas
const routes = [
    { name: 'Usuario', route: routeUsuario },
    { name: 'Historico', route: routeHistorico },
    { name: 'Imagem', route: routeImagem },
    { name: 'Post', route: routePost },
    { name: 'Galeria', route: routeGaleria },
    { name: 'Favorito', route: routeFavorito },
    { name: 'Comentario', route: routeComentario },
    { name: 'Noticia', route: routeNoticia }
];

routes.forEach(({ name, route }) => {
    if (typeof route !== 'function') {
        console.error(`Error: ${name}Route is not a function. It is a ${typeof route}.`);
    } else {
        router.use(route);
    }
});

module.exports = router;