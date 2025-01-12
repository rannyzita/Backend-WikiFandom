const express = require('express');
const router = express.Router();
const ComentarioController = require('../controllers/ComentarioController.js');

// Usando os métodos do controller nas rotas
router.get('/', ComentarioController.getAllComentarios);
router.get('/:id', ComentarioController.getAllComentarioById);
router.post('/', ComentarioController.createComentario);
router.put('/:id', ComentarioController.updateComentario);
router.delete('/:id', ComentarioController.deleteComentario);