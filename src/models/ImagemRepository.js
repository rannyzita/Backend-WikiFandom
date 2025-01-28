const knex = require('../db/connection.js');

class ImagemRepository {
    static async findById(id) {
        return await knex("Imagem").where("id", id);
    }

    static async create(data) {
        return await knex("Imagem").insert(data);
    }

    static async delete(id) {
        return await knex("Imagem").where("id", id).del();
    }

    static async findAll() {
        return await knex("Imagem").select();
    }
}

module.exports = ImagemRepository;
