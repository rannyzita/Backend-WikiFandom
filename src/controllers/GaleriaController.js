const GaleriaRepository = require('../models/GaleriaRepository.js');

class GaleriaController{
    // Método para buscar todas as imagens..
    static async getAllImages(req, res){
        try{
            const images = await GaleriaRepository.findAll();
            res.json(images);
        } catch(erro){
            return res.status(500).json({message: 'Erro ao verificar imagens', erro});
        }
    }

     // Método para criar uma nova imagem
    static async createImage(req, res) {
        try {
            const { id_imagem, descricao } = req.body;
    
            if (!id_imagem || typeof id_imagem !== 'string') {
                return res.status(400).json({ message: 'ID da imagem inválido.' });
            }
            
            const imagemExistente = await GaleriaRepository.findById(id_imagem); 
            if (imagemExistente) {
                const adicionadaNaGaleria = await GaleriaRepository.adicionarImagemNaGaleria(id_imagem, descricao); 
                res.status(200).json({ message: 'Imagem adicionada à galeria com sucesso.' });
                if (!adicionadaNaGaleria) {
                    return res.status(500).json({ message: 'Erro ao adicionar imagem à galeria.' });
                }
            }
        } catch (erro) {
            console.error(erro); 
            return res.status(500).json({ message: 'Erro ao adicionar imagem à galeria.', erro });
        }
    }
    
     // Método para deletar uma imagem por ID
    static async deleteImage(req, res){
        try{
            const imagemId = req.params.imagemId;
            const image = await GaleriaRepository.findById(imagemId);

            if(!image){
                return res.status(404).json({ message: 'Imagem não encontrada'});
            }

            await GaleriaRepository.delete(imagemId);
            res.status(201).json({message: 'Imagem deletada.'});
        } catch(erro){
            return res.status(500).json({ message: '', erro });
        }
    }
}

module.exports = GaleriaController;