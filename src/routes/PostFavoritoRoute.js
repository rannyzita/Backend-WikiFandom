const express = require('express');
const router = express.Router();
const PostFavoritoController = require('../controllers/PostFavoritoController.js')
const { authFavorito } = require('../middlewares/authFavorito.js');

// o post favorito vai ter que o usario estar logado tambem ne
// Usando os métodos do controller nas rotas
router.post('/posts-favoritos', authFavorito, PostFavoritoController.createPostFavorito);
router.get('/posts-favoritos/:id', authFavorito, PostFavoritoController.getAllFavoritosByUserId);
router.delete('/posts-favoritos/:id', authFavorito, PostFavoritoController.deletePostFavorito);

module.exports = router;
