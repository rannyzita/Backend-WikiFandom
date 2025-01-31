const knex = require('../db/connection.js');

class ComentarioRepository {
    static async findAll() {
        return await knex("Comentario").select();
    }
    
    // todos os comentarios de um determinado
    // post (pelo id)
    static async findAllByPostId(id_post) {
        return await knex("Comentario").where("id_post", id_post);
    }

    static async create(data) {
        return await knex("Comentario").insert(data);
    }

    static async delete(id) {
        return await knex("Comentario").where('id', id).del();
    }

    static async update(id, data) {
        return await knex("Comentario").where('id', id).update(data);
    }

    static async findById(id) {
        return await knex("Comentario").where('id', id).first();
    }
}

module.exports = ComentarioRepository;
