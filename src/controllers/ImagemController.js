const ImagemRepository = require('../models/ImagemRepository');
const { v4: uuidv4 } = require('uuid');

class ImagemController {
    // Metódo de verificar todas as imagens
    static async getAllImage(req, res) {
        try {
            const imagens = await ImagemRepository.findByPostId(req.params.id_post);
            res.json(imagens);
        } catch (erro) {
            return res.status(500).json({ message: 'Erro ao verificar imagens.', erro });
        }
    }

    // Metódo para criar uma imagem
    static async createImagem(req, res) {
        try {
            const { titulo, url_post, categoria } = req.body;
            
            if (!titulo || typeof titulo !== 'string') {
                return res.status(400).json({ message: 'Título inválido.' });
            }
            if (!url_post || typeof url_post !== 'string') {
                return res.status(400).json({ message: 'URL inválida.' });
            }
            if (!categoria || typeof categoria !== 'string') {
                return res.status(400).json({ message: 'Categoria inválida.' });
            }

            const id = uuidv4();

            const imageId = await ImagemRepository.create({ id, titulo, url_post, categoria });
            console.log("Imagem criada com sucesso:", imageId);
            res.status(201).json({ message: 'Imagem criada com sucesso.', imageId });

        } catch (erro) {
            return res.status(500).json({ message: 'Erro ao criar imagem.', erro });
        }
    }

    // Metódo para deletar uma imagem
    static async deleteImagem(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({ message: 'Id da imagem não foi informado.' });
            }
            const deletado = await ImagemRepository.delete(id);
            if (deletado) {
                res.json({ message: 'Imagem deletada com sucesso.' })
            } else {
                res.status(404).json({ message: 'Imagem não encontrada.' });
            }
        } catch (erro) {
            return res.status(500).json({ message: 'Erro ao deletar imagem.', erro });
        }
    }
}

module.exports = ImagemController;
