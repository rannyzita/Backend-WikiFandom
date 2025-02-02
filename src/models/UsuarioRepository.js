// conexao com os dados do banco de dados
const knex = require('../db/connection.js');

class UsuarioRepository {

    // comando que irá retornar todos os usuarios do banco de dados
    static async findAll() {
        return await knex("Usuario").select();
    }
    // static pois pertence a classe, nao a instancia da classe
    // encontrar usuario pelo id
    static async findById(id) {
        return await knex("Usuario").where("id", id).first();
    }


    // criar um usuario, atraves do req body
    static async create(data) {
        return await knex("Usuario").insert(data);
    }

    // atualizar um usuario utilizando o req body, 
    // mandando todos os campos, e modificando 
    // apenas aquele que quer atualizar
    static async update(id, data) {
        return await knex("Usuario").where("id", id).update(data);
    }

    // deletar um usuario pelo id, passado como parametro na rota
    static async delete(id) {
        return await knex("Usuario").where("id", id).del();
    }
}

// permite que essa classe seja chamada em outro
// arquivo
module.exports = UsuarioRepository;
