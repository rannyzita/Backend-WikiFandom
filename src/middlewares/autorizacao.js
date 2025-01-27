const PostRepository = require('../models/PostRepository.js');

class AutorizacaoControle{
    static async verificaAutorizacao(req, res, next){
        const id_post = req.params.id;
        try {
            const post = await PostRepository.findById(id_post);
            if(!post){
                return res.status(404).json({message: 'Post não encontrado.'})
            }

            if(post.user_id !== req.user.id){
                return res.status(403).json({message: 'Sem autorização para deletar post'})
            }

            next();
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }
}

module.exports = AutorizacaoControle;