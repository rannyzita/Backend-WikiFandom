const express = require('express');
const router = express.Router();
const HistoricoPesquisaController = require('../controllers/HistoricoPesquisaController.js');

// Criar um histórico de pesquisa
router.post('/historico', HistoricoPesquisaController.createHistorico);

// Listar todos os históricos de pesquisa (não precisa de um ID)
router.get('/historico', HistoricoPesquisaController.getAllHistorico);

// Excluir um histórico de pesquisa pelo ID
router.delete('/historico/:id', HistoricoPesquisaController.deleteHistorico);

module.exports = router;
