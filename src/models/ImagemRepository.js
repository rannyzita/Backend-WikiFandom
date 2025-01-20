const knex = require('../db/connection.js');

class ImagemRepository {
    static async findByPostId(id_post) {
        return await knex("Imagem").where("id_post", id_post);
    }

    static async create(data) {
        return await knex("Imagem").insert(data);
    }

    static async delete(id) {
        return await knex("Imagem").where("id", id).del();
    }
}

module.exports = ImagemRepository;
