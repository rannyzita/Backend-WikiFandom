// conexao com os dados do banco de dados
const knex = require('../db/connection.js');

class UsuarioRepository {
    static async findAll() {
        return await knex("Usuario").select();
    }
    // static pois pertence a classe, nao a instancia da classe
    static async findById(id) {
        return await knex("Usuario").where("id", id).first();
    }

    static async create(data) {
        return await knex("Usuario").insert(data);
    }

    static async update(id, data) {
        return await knex("Usuario").where("id", id).update(data);
    }

    static async delete(id) {
        return await knex("Usuario").where("id", id).del();
    }
}

module.exports = UsuarioRepository;
