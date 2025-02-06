const UsuarioRepository = require('../models/UsuarioRepository.js');
const { v4: uuidv4 } = require('uuid');
// status usados:
// 500, 404, 400, 201

class UsuarioController {
  // Método para listar todos os usuários
static async getAllUsuarios(req, res) {
    try {
        const usuarios = await UsuarioRepository.findAll();
        res.status(200).json(usuarios);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

  // Método para buscar um usuário por ID
static async getUsuarioById(req, res) {
    try {
        const usuario = await UsuarioRepository.findById(req.params.id);
        if (usuario) {
            res.status(200).json(usuario);
        } else {
            res.status(404).json({ message: 'Usuário nao encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

  // Método para criar um novo usuário
static async createUsuario(req, res) {
    console.log("Chegou até aqui");
    const { nome } = req.body;

    if (!nome || typeof nome !== 'string') {
        return res.status(400).json({ message: 'nome deve ser string.' });
    }

    const id = uuidv4();

    try {
        const newUsuario = await UsuarioRepository.create(id, req.body);
        // status usado para indicar que algum recurso foi criado com sucesso
        res.status(201).json(newUsuario);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

  // Método para atualizar um usuário
static async updateUsuario(req, res) {
    try {
        const updatedUsuario = await UsuarioRepository.update(req.params.id, req.body);
        if (updatedUsuario) {
            res.status(200).json(updatedUsuario);
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

    // Método para deletar um usuário
    static async deleteUsuario(req, res) {
        try {
            const deletedUsuario = await UsuarioRepository.delete(req.params.id);
            if (deletedUsuario) {
                // status 204 indica que algo foi realizada
                // mas sem retorno de algo
                res.status(204).end();
            } else {
                res.status(404).json({ message: 'Usuário não encontrado.' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = UsuarioController;
