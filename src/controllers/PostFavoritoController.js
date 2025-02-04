const FavoritoRepository = require('../models/FavoritoRepository.js');
const { v4: uuidv4 } = require('uuid');

class PostFavoritoController {
        static async getAllFavoritosByUserId(req, res) {
            try {
                const favoritos = await FavoritoRepository.findAllByUserId(req.params.id);
                if (favoritos) {
                    res.json(favoritos);
                } else {
                    res.status(404).json({ message: 'Favorites not found' });
                }
            } catch (err) {
                res.status(500).json({ error: err.message });
            }
        }

        static async createPostFavorito(req, res) {
            // Isso verifica se a requisição está chegando
            try {
            const { id_post, id_usuario } = req.body;

            if (!id_post || !id_usuario || typeof id_post !== 'string' || typeof id_usuario !== 'string') {
                return res.status(400).json({ message: 'ID do post e ID do usuário são obrigatórios e devem ser strings.' });
            }

            const id = uuidv4();

            const PostFavorito = await FavoritoRepository.create({id, id_post, id_usuario});

            res.status(200).json(PostFavorito);
            } catch (err) {
                res.status(500).json({ error: err.message });

            }
        }
        static async deletePostFavorito(req, res) {
            try {
                const { id } = req.params; 
                
                const deletedFavorito = await FavoritoRepository.delete(id);
        
                if (deletedFavorito) {
                    return res.status(204).send();
                } else {
                    return res.status(404).json({ message: 'Favorite not found' });
                }
            } catch (err) {
                return res.status(500).json({ error: err.message });
            }
        }
        
}

module.exports = PostFavoritoController;