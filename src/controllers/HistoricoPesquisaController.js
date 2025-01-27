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
            const createHistorico = await HistoricoPesquisaRepository.create(req.body);
            return res.status(201).json({ message: 'Historico realizado com sucesso', createHistorico });
        } catch (erro) {
            return res.status(500).json({ message: 'Carregamento do histórico falhou.', erro: erro.message });
        }
    }

    static async deleteHistorico(req, res){
        try {
            const {id} = req.body;

            if(!id) {
                return res.status(400).json({ message: 'ID do histórico é obrigatório.' });
            }

            const deleteHistorico = await HistoricoPesquisaRepository.delete(id);

            if (deleteHistorico) {
                res.json({ message: "historico apagado."});
            } else {
                res.status(404).json({ message: "Historico não encontrado." })
            }
        } catch (error) {
            return res.status(404).json({ message: "Error: " + error.message });
        }
    }
}

module.exports = HistoricoPesquisaController;