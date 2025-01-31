const express = require('express');
const router = express.Router();
const PostFavoritoController = require('../controllers/PostFavoritoController.js')
const { autorizacao } = require('../middlewares/auth.js');

// o post favorito vai ter que o usario estar logado tambem ne
// Usando os métodos do controller nas rotas
router.post('/posts-favoritos', autorizacao, PostFavoritoController.createPostFavorito);
router.get('/posts-favoritos/:id', autorizacao, PostFavoritoController.getAllFavoritosByUserId);
router.delete('/posts-favoritos/:id', autorizacao, PostFavoritoController.deletePostFavorito);

module.exports = router;
