const knex = require('../db/connection.js');

class HistoricoPesquisaRepository {
    static async findAll() {
        return await knex("Historico_Pesquisa").select("*");
    }

    static async create(data) {
        return await knex("Historico_Pesquisa").insert(data);
    }

    static async delete(id) {
        return await knex("Historico_Pesquisa").where("id", id).del();
    }
}

module.exports = HistoricoPesquisaRepository;