const express = require('express');
const router = express.Router();
const ComentarioController = require('../controllers/ComentarioController.js');

// Usando os métodos do controller nas rotas
router.get('/comentarios', ComentarioController.getAllComentarios);
router.get('/comentarios/:id', ComentarioController.getAllComentarioById);
router.post('/comentarios', ComentarioController.createComentario);
router.put('/comentarios/:id', ComentarioController.updateComentario);
router.delete('/comentarios/:id', ComentarioController.deleteComentario);



