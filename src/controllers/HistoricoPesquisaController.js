const HistoricoPesquisaRepository = require('../models/HistoricoPesquisaRepository.js');
class HistoricoPesquisaController{
    // Verificar todo o histórico
    static async getAllHistorico(req, res){
        try{
            const userId = req.user.id;
            const historico = await HistoricoPesquisaRepository.findAllByUserId(userId);
            res.json(historico);
        } catch(erro){
            return res.status(500).json({message: 'Erro ao verificar histórico.', erro})
        }
    }

    // Criar histórico
    static async createHistorico(req, res){
        try {
            console.log('Received data:', req.body); // Log the received data
            const createHistorico = await HistoricoPesquisaRepository.create(req.body);
            return res.status(201).json({ message: 'Historico realizado com sucesso', createHistorico });
        } catch (erro) {
            console.error('Error creating historico:', erro); // Log the full error
            return res.status(500).json({ message: 'Carregamento do histórico falhou.', erro: erro.message });
        }
    }
}

module.exports = HistoricoPesquisaController;