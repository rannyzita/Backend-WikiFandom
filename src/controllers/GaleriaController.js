const GaleriaRepository = require('../models/GaleriaRepository.js');

class GaleriaController{
    static async getAllImages(req, res){
        try{
            const images = await GaleriaRepository.findAll();
            res.json(images);
        } catch(erro){
            return res.status(500).json({message: 'Erro ao verificar imagens', erro});
        }
    }

    static async createImage(req, res){
        try{
            const {titulo, url, categoria} = req.body;
            if(!titulo || !url || !categoria){
                return res.status(400).json({message: 'Erro ao criar imagem, insira o que é pedido.'});
            }

            const newImage = await GaleriaRepository.create({ titulo, url, categoria });

            res.status(201).json({ message: 'Imagem criada.', imagem: newImage });
        } catch (erro) {
            return res.status(500).json({ message: 'Erro na criação da sua imagem', erro });
        }
    }

    static async deleteImage(req, res){
        try{
            const imagemId = req.params.imagemId;
            const image = await GaleriaRepository.findById(imagemId);

            if(!image){
                return res.status(404).json({ message: 'Imagem não encontrada'});
            }

            await GaleriaRepository.delete(imagemId);
            res.status(201).json({message: 'Erro ao deletar imagem.'});
        } catch(erro){
            return res.status(500).json({ message: '', erro });
        }
    }
}

module.exports = GaleriaController;