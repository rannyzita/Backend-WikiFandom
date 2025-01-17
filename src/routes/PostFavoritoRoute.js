const express = require('express');
const router = express.Router();
const PostFavoritoController = require('../controllers/PostFavoritoController.js')

// Usando os métodos do controller nas rotas
router.post('/posts-favoritos', PostFavoritoController.createPostFavorito);
router.get('/posts-favoritos/:id', PostFavoritoController.getAllFavoritosByUserId);
router.delete('/posts-favoritos/:id', PostFavoritoController.deletePostFavorito);

module.exports = router;
