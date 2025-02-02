const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController.js');
const { authPost } = require('../middlewares/authPost.js');

// Usando os métodos do controller nas rotas

// pega todos os posts do banco de dados
router.get('/posts', PostController.getAllPosts);

// cria um post
router.post('/posts', PostController.createPost);

// atualiza um post 
router.put('/posts/:id', authPost, PostController.updatePost);

// deleta um post 
router.delete('/posts/:id', authPost, PostController.deletePost);

// encontrar um post pelo id
router.get('/posts/:id', PostController.findByIdPost)

module.exports = router;