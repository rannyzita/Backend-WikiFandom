const express = require('express');
const router = express.Router();
const HistoricoPesquisaController = require('../controllers/ImagemController');

router.get('/imagens/:id_post', ImagemController.getAllImage);
router.post('/imagens', ImagemController.createImagem);
router.delete('/imagens/:id', ImagemController.deleteImagem);

module.exports = router;
