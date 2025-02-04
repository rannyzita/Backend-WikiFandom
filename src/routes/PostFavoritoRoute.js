const express = require('express');
const router = express.Router();
const PostFavoritoController = require('../controllers/PostFavoritoController.js')
const { authFavorito } = require('../middlewares/authFavorito.js');

// o post favorito vai ter que o usario estar logado tambem ne
 // Usando os métodos do controller nas rotas
router.post('/favoritos', authFavorito, PostFavoritoController.createPostFavorito);
router.get('/favoritos/:id', authFavorito, PostFavoritoController.getAllFavoritosByUserId);
router.delete('/favoritos/:id', authFavorito, PostFavoritoController.deletePostFavorito);

    
module.exports = router;
