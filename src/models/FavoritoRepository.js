const knex = require('../db/connection.js');
const Usuario = require('../models/UsuarioRepository.js')
const Post = require('../models/PostRepository.js')

class FavoritoRepository {
    static async findAllByUserId(id_usuario) {
        return await knex("Favorito").where("id_usuario", id_usuario);
    }

    static async create(data) {
        const { id_post, id_usuario} = data;
        const PostFavorito = await knex("Favorito").where("id_post", id_post).
        andWhere("id_usuario", id_usuario);

        const usuario = await Usuario.findById(id_usuario);
        const post = await Post.findById(id_post);
        
        if (!usuario) {
            return await 'Usuario não existe';
        }
        
        if (!post) {
            return await 'Post não existe';
        }
        
        if (!PostFavorito || PostFavorito.length === 0) {
            return await knex('Favorito').insert(data);
        } else {

            console.log(PostFavorito);
            return await false;
            
        }  
    }

    static async delete(id_usuario, id_post) {
        return await knex("Favorito").where("id_usuario", id_usuario).andWhere("id_post", id_post).del();
    }
}

module.exports = FavoritoRepository;
