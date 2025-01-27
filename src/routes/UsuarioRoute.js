const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController.js');

// Usando os métodos do controller nas rotas

// todos os usuarios
router.get('/usuarios', UsuarioController.getAllUsuarios);

// usuario especifico pelo id
router.get('/usuarios/:id', UsuarioController.getUsuarioById);

// usuario especifico pelo email
router.get('/usuarios/:email', UsuarioController.getUsuarioById);

// criar um usuario
router.post('/usuarios', UsuarioController.createUsuario);

// atualizar um usuario
router.put('/usuarios/:id', UsuarioController.updateUsuario);

// deletar um usuario
router.delete('/usuarios/:id', UsuarioController.deleteUsuario);

module.exports = router;