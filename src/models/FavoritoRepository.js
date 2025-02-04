const knex = require('../db/connection.js');
const Usuario = require('../models/UsuarioRepository.js')
const Post = require('../models/PostRepository.js')
const { v4: uuidv4 } = require('uuid');


class FavoritoRepository {
    static async findAllByUserId(id_usuario) {
        return await knex("Favorito").where("id_usuario", id_usuario);
    }

    static async create(data) {
        const { id_post, id_usuario } = data;

        const PostFavorito = await knex("Favorito").where("id_post", id_post)
            .andWhere("id_usuario", id_usuario);

        const usuario = await Usuario.findById(id_usuario);
        const post = await Post.findById(id_post);
        
        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }
        
        if (!post) {
            throw new Error('Post não encontrado');
        }
        
        if (PostFavorito && PostFavorito.length > 0) {
            throw new Error('Post já adicionado aos favoritos');
        }

        // Inserir o favorito na tabela
        const id = uuidv4();  // Gerar um novo ID para o favorito
        const PostFavoritoCriado = await knex("Favorito").insert({
            id,
            id_post,
            id_usuario
        });

        // Retornar o PostFavorito criado (ou dados relacionados)
        return {
            id,
            id_post,
            id_usuario
        };
    }

    static async delete(id) {
        return await knex("Favorito").where("id", id).del();
    }
}

module.exports = FavoritoRepository;
