const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');
const autorizacao = require('../middlewares/autorizacao.js')

// Usando os métodos do controller nas rotas

// pega todos os posts do banco de dados
router.get('/posts', PostController.getAllPosts);

// cria um post
router.post('/posts', PostController.createPost);

// pega um post pelo id
router.put('/posts/:id', autorizacao.verificaAutorizacao, PostController.updatePost);

// deleta um post pelo id
router.delete('/posts/:id', autorizacao.verificaAutorizacao, PostController.deletePost);

module.exports = router;