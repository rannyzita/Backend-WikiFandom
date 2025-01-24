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
    static async createImage(req, res){
        try{
            const {id_imagem} = req.body;
            if(!id_imagem ){
                return res.status(400).json({message: 'Erro ao criar imagem, insira o que é pedido.'});
            }
            console.log('id_imagem:', id_imagem);

            const url_image =  await GaleriaRepository.getImageUrlById(id_imagem);
            if(!url_image){
                return res.status(404).json({ message: 'Imagem não encontrada.'});
            }
            console.log('url_image:', url_image);

            const newImage = await GaleriaRepository.create({ url_image });
            res.status(201).json({ message: 'Imagem criada.', imagem: newImage });
            // tá pulando para o catch
        } catch (erro) {
            console.error('Erro ao criar imagem', erro)
            return res.status(500).json({ message: 'Erro na criação da sua imagem', erro });
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
            res.status(201).json({message: 'Erro ao deletar imagem.'});
        } catch(erro){
            return res.status(500).json({ message: '', erro });
        }
    }
}

module.exports = GaleriaController;