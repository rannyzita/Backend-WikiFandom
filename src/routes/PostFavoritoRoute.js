const express = require('express');
const router = express.Router();
const PostFavoritoController = require('../controllers/PostFavoritoController.js')
const { authMiddleware } = require('../middlewares/authFavorito.js');

// o post favorito vai ter que o usario estar logado tambem ne
// Usando os métodos do controller nas rotas
router.post('/posts-favoritos', authMiddleware, PostFavoritoController.createPostFavorito);
router.get('/posts-favoritos/:id', authMiddleware, PostFavoritoController.getAllFavoritosByUserId);
router.delete('/posts-favoritos/:id', authMiddleware, PostFavoritoController.deletePostFavorito);

module.exports = router;
