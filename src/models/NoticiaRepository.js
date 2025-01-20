const knex = require('../db/connection.js');

class NoticiaRepository {
    static async findAll() {
        return await knex("Noticia").select();
    }

    static async create(data) {
        return await knex("Noticia").insert(data);
    }

    static async delete(id) {
        return await knex("Noticia").where("id", id).del();
    }
}

module.exports = NoticiaRepository;
