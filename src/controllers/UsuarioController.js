const UsuarioRepository = require('../models/UsuarioRepository.js');

class UsuarioController {
  // Método para listar todos os usuários
static async getAllUsuarios(req, res) {
    try {
        const usuarios = await UsuarioRepository.findAll();
        res.json(usuarios);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

  // Método para buscar um usuário por ID
static async getUsuarioById(req, res) {
    try {
        const usuario = await UsuarioRepository.findById(req.params.id);
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

  // Método para criar um novo usuário
static async createUsuario(req, res) {

    const { nome } = req.body;

    if (!nome || typeof nome !== 'string') {
        return res.status(400).json({ message: 'nome deve ser string.' });
    }

    try {
        const newUsuario = await UsuarioRepository.create(req.body);
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
            res.json(updatedUsuario);
        } else {
            res.status(404).json({ message: 'User not found' });
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

//Adicionando metódos para atualizar e deletar perfil segundo requisitos
 /*   static async atualizarPerfil(req, res){
        try {
            const id_usuario = req.usuario.id;
            const {nome, email, foto_perfil} = req.body;

            const dadosAtualizados = {nome, email, foto_perfil}
            if (nome)dadosAtualizados.nome = nome;
            if(email)dadosAtualizados.email = email;
            if(foto_perfil)dadosAtualizados.foto_perfil = foto_perfil;

            const atualizarUsuario = await UsuarioRepository.update(id_usuario, req.body);
            if (atualizarUsuario) {
                res.json(atualizarUsuario);
            } else {
                res.status(404).json({ message: 'Usuário não foi encontrado' });
            }
        } catch (erro) {
            res.status(500).json({message: erro.message});
        }
    }

    static async deletarPerfil(req, res){
        try{
            const id_usuario = req.usuario.id;
            const deletarUsuario = await UsuarioRepository.delete(id_usuario);
            if(deletarUsuario){
                res.status(204).end();
            } else{
                res.status(404).json({message: 'Usuário não foi encontrado'});
            }
        } catch (erro){
            res.status(500).json({message: erro.message});
        }
    }*/

}

module.exports = UsuarioController;
