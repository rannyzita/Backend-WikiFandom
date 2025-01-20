// Importação do módulo JWT
const jwt = require('jsonwebtoken');

// next chama a próxima função ou o próximo passo depois que esse middleware for executado
// middleware é uma função que processa as requisições antes de entregá-las ao endpoint final
const authMiddleware = (req, res, next) => { 
    const token = req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message: 'Token não fornecido'});
    } 
    try{
        const decoded = jwt.verify(token, 'sua_chave');
        req.user = decoded;
        next();
    } catch (error){
        return res.status(401).json({message: 'Token inválido'});
    }
};

module.exports = authMiddleware;