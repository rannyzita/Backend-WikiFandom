const express = require('express');
const router = express.Router();
const HistoricoPesquisaController = require('../controllers/HistoricoPesquisaController.js');

router.post('/historico', HistoricoPesquisaController.createHistorico);
router.get('/historico/:id', HistoricoPesquisaController.getAllHistorico);
router.delete('/historico/:id', HistoricoPesquisaController.deleteHistorico);

module.exports = router;