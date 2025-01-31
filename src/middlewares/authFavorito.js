const jwt = require('jsonwebtoken');

const authFavorito = (req, res, next) => {
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
        req.user = decoded;  // Armazena os dados do usuário autenticado na requisição

        next();  // Passa para a próxima função
    } catch (error) {
        return res.status(401).json({ error: 'Token inválido ou expirado' });
    }
};

module.exports = { authFavorito };
