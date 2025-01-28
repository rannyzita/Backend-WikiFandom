const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');
const autorizacao = require('../middlewares/autorizacaoPost.js')

// Usando os métodos do controller nas rotas

// pega todos os posts do banco de dados
router.get('/posts', PostController.getAllPosts);

// cria um post
router.post('/posts', PostController.createPost);

// atualiza um post 
router.put('/posts/:id', autorizacao.verificaAutorizacao, PostController.updatePost);

// deleta um post 
router.delete('/posts/:id', autorizacao.verificaAutorizacao, PostController.deletePost);

// encontrar um post pelo id
router.get('/posts/:id', autorizacao.verificaAutorizacao, PostController.findByIdPost)

module.exports = router;