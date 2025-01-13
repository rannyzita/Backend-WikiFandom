const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');

// Usando os métodos do controller nas rotas
router.get('/', PostController.getAllPosts);
router.post('/', PostController.createPost);
router.put('/:id', PostController.updatePost);
router.delete('/:id', PostController.deletePost);

module.exports = router;