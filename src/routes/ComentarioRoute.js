const express = require('express');
const router = express.Router();
const ComentarioController = require('../controllers/ComentarioController.js');
const { authComentario} = require('../middlewares/authComentario.js');
// Usando os métodos do controller nas rotas

// todos os comentarios existentes do site
router.get('/comentarios', ComentarioController.getAllComentarios);

// todos os comentarios do usuario em especifico
router.get('/comentarios/:id', ComentarioController.getAllComentarioById);

// criar um comentario no site
router.post('/comentarios', ComentarioController.createComentario);

// deletar um comentario
router.delete('/comentarios/:id', authComentario, ComentarioController.deleteComentario);

// atualizar um comentario
router.put('/comentarios/:id', authComentario, ComentarioController.updateComentario);

module.exports = router;


