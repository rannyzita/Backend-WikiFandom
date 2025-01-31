const jwt = require('jsonwebtoken');
const ComentarioRepository = require('../models/ComentarioRepository.js');

const authComentario = async (req, res, next) => {
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
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido' });
    }

    const comentario = await ComentarioRepository.findById(req.params.id);

    if (!comentario) {
        return res.status(404).json({ message: 'Comentário não encontrado' });
    }

    if (req.method === 'DELETE' && comentario.id_usuario !== req.user.id_usuario) {
        return res.status(403).json({ message: 'Somente o usuário que criou o comentário pode excluí-lo.' });
    }

    if (req.method === 'PUT' && comentario.id_usuario !== req.user.id_usuario) {
        return res.status(403).json({ message: 'Somente o usuário que criou o comentário pode atualizá-lo.' });
    }

    next();
};

module.exports = { authComentario };