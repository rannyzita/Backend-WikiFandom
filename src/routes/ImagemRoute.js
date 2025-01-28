const express = require('express');
const router = express.Router();
const ImagemController = require('../controllers/ImagemController');

// pega uma imagem especifica pelo id
router.get('/imagens/:id_post', ImagemController.getImagemById);

// cria uma imagem
router.post('/imagens', ImagemController.createImagem);

// deleta uma imagem
router.delete('/imagens/:id', ImagemController.deleteImagem);

module.exports = router;
