const ImagemRepository = require('../models/ImagemRepository');

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
            const {url} = req.body;

            if (!url) {
                return res.status(400).json({ message: 'Erro, dados inválidos.' });
            }

            const imageId = await ImagemRepository.create({ url });
            return res.status(201).json({ message: 'Imagem criada com sucesso.'});
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
