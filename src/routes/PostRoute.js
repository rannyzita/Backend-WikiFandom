const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');

// Usando os métodos do controller nas rotas
router.get('/posts', PostController.getAllPosts);
router.post('/posts', PostController.createPost);
router.put('/posts/:id', PostController.updatePost);
router.delete('/posts/:id', PostController.deletePost);

module.exports = router;