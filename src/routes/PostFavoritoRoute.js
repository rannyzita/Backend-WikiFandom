const express = require('express');
const router = express.Router();
const PostFavoritoController = require('../controllers/PostFavoritoController.js')

// Usando os métodos do controller nas rotas
router.post('/', PostFavoritoController.createPostFavorito);
router.get('/:id', PostFavoritoController.getAllFavoritosByUserId);
router.delete('/:id', PostFavoritoController.deletePostFavorito);

module.exports = router;
