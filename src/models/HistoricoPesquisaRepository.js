const knex = require('../db/connection.js');
class HistoricoPesquisaRepository {
    static async findAllByUserId(id_usuario) {
        return await knex("Historico_Pesquisa").where("id_usuario", id_usuario);
    }

    static async create(data) {
        return await knex("Historico_Pesquisa").insert(data);
    }
}

module.exports = HistoricoPesquisaRepository;