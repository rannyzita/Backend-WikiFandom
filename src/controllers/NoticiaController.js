const NoticiaRepository = require('../models/NoticiaRepository.js');
const { v4: uuidv4 } = require('uuid');

class NoticiaController {
    // Verificar todas as Notícias
    static async getAllNoticias(req, res) {
        try {
            const news = await NoticiaRepository.findAll();
            res.json(news);
        } catch (erro) {
            console.error('Erro ao verificar notícias:', erro);
            return res.status(500).json({ message: 'Erro ao verificar notícias.', erro });
        }
    }

    // Metódo para criar uma nova notícia
    static async createNoticia(req, res) {
        try {
            const id = uuidv4();
    
            const noticiaData = {
                id,
                ...req.body,
            };
    
            if (!noticiaData) {
                return res.status(400).json({ message: 'Erro, dados inválidos.' });
            }
    
            const noticia = await NoticiaRepository.create(noticiaData);
            return res.status(201).json({ message: 'Notícia criada com sucesso.', data: noticia });
        } catch (erro) {
            console.error('Erro ao criar notícia:', erro);
            return res.status(500).json({ message: 'Erro ao criar notícia.', erro });
        }
    }

    // Metódo para deletar uma notícia
    static async deleteNoticia(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({ message: 'Id da notícia não foi informado.' });
            }

            const deleta = await NoticiaModel.delete(id);
            if (deleta) {
                res.json({ message: 'Notícia deletada com sucesso.' });
            } else {
                res.status(404).json({ message: 'Notícia não encontrada.' });
            }

        } catch (erro) {
            console.error('Erro ao deletar notícia:', erro);
            return res.status(500).json({ message: 'Erro ao deletar notícia.', erro });
        }
    }

    // Metódo para atualizar uma notícia
    static async updateNoticia(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({ message: 'Id da notícia não foi informado.' });
            }

            const noticiaAtualizada = await NoticiaRepository.update(id, req.body);

            if (!noticiaAtualizada) {
                return res.status(404).json({ message: 'Notícia não encontrada.' });
            }

            return res.json({ message: 'Notícia atualizada com sucesso.', data: noticiaAtualizada });
        } catch (err) {
            console.error('Erro ao atualizar notícia:', err);
            return res.status(500).json({ message: 'Erro ao atualizar notícia.', err });
        }
    }

}

module.exports = NoticiaController;
