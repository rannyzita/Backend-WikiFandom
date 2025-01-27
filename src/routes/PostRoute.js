const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');
const autorizacao = require('../middlewares/autorizacao.js')

// Usando os métodos do controller nas rotas
router.get('/posts', PostController.getAllPosts);
router.post('/posts', PostController.createPost);
router.put('/posts/:id', autorizacao.verificaAutorizacao, PostController.updatePost);
router.delete('/posts/:id', autorizacao.verificaAutorizacao, PostController.deletePost);

// buscar posts e comentarios
router.get('/posts/search', PostController.buscarPost);
router.post('/posts/:id/comentarios', PostController.addComentarioPost);
module.exports = router;