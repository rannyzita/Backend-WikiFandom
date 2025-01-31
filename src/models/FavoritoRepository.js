const knex = require('../db/connection.js');

class FavoritoRepository {
    static async findAllByUserId(id_usuario) {
        return await knex("Favorito").where("id_usuario", id_usuario);
    }

    static async create(data) {
        const { id_post, id_usuario} = data;
        const PostFavorito = await knex("Favorito").where("id_post", id_post).
        andWhere("id_usuario", id_usuario);
        
        if (PostFavorito) {
            return await knex('Favorito').insert(data);
        } else {
            return await false;
        }  
    }

    static async delete(id_usuario, id_post) {
        return await knex("Favorito").where("id_usuario", id_usuario).andWhere("id_post", id_post).del();
    }
}

module.exports = FavoritoRepository;
