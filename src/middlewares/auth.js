// Importação do módulo JWT
const jwt = require('jsonwebtoken');

// next chama a próxima função ou o próximo passo depois que esse middleware for executado
// middleware é uma função que processa as requisições HTTP antes de entregá-las ao endpoint final
const authMiddleware = (req, res, next) => { 
    const token = req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message: 'Token não fornecido'});
    } 
    try{
        const secret = process.env.JWT_SECRET;
        if (!secret) {
        throw new Error("JWT_SECRET não está configurado.");
        }
        const decoded = jwt.verify(token, secret);
        
        req.user = decoded;
        next();
    } catch (error){
        return res.status(401).json({message: 'Token inválido'});
    }
};

module.exports = authMiddleware;