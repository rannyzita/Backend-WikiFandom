const express = require('express');
const router = express.Router();
const HistoricoPesquisaController = require('../controllers/HistoricoPesquisaController.js');

router.get('/historico', HistoricoPesquisaController.getAllHistorico);
router.post('/historico', HistoricoPesquisaController.createHistorico);

module.exports = router;