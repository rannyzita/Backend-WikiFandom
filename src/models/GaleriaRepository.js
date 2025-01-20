const knex = require('../db/connection.js');

class GaleriaRepository {
    static async findAll() {
        return await knex("Galeria").select();
    }

    static async create(data) {
        return await knex("Galeria").insert(data);
    }

    static async delete(id) {
        return await knex("Galeria").where("id", id).del();
    }
}

module.exports = GaleriaRepository;
