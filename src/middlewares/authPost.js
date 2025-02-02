// autrizacaoPost.js
const jwt = require('jsonwebtoken');
const PostRepository = require('../models/PostRepository');

const authPost = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    try {
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error('JWT_SECRET não está configurado.');
        }

        const decoded = jwt.verify(token, secret);
        req.user = decoded;

        const post = await PostRepository.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ message: 'Post não encontrado' });
        }

        if (post.id_usuario !== req.user.id) {  // Corrigido 'req.usuario' para 'req.user'
            return res.status(403).json({ message: 'Sem autorização para atualizar ou excluir.' });
        }

        next();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { authPost }; 
