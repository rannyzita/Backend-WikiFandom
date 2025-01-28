const express = require('express');
const router = express.Router();
const ComentarioController = require('../controllers/ComentarioController.js');

// Usando os métodos do controller nas rotas

// todos os comentarios existentes do site
router.get('/comentarios', ComentarioController.getAllComentarios);

// todos os comentarios do usuario em especifico
router.get('/comentarios/:id', ComentarioController.getAllComentarioById);

// criar um comentario no site
router.post('/comentarios', ComentarioController.createComentario);

// deletar um comentario
router.delete('/comentarios/:id', ComentarioController.deleteComentario);

module.exports = router;


