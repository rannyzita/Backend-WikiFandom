const knex = require('../db/connection.js');

class PostRepository {

    // buscar todos os posts do banco de dados
    static async findAll() {
        return await knex("Post").select();
    }

    // buscar um post pelo id do banco de dados 
    static async findById(id) {
        return await knex("Post").where("id", id).first();
    }

    // criar um post
    static async create(data) {
        return await knex("Post").insert(data);
    }

    // atualizar um post pelo id  e os dados do body
    static async update(id, data) {
        return await knex("Post").where("id", id).update(data);
    }

    // deletar um post
    static async delete(id) {
        return await knex("Post").where("id", id).del();
    }
}

module.exports = PostRepository;
