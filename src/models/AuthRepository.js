const knex = require('../db/connection.js');

class AuthRepository{

    static async findById(id){
        return await knex('Usuario').where('id', id).first();
    }

    static async findByEmail(email){
        return await knex('Usuario').where('email', email).first();
    }

    static async create(data){
        return await knex('Usuario').insert(data)
    }

    static async findSenha({email, senha}){
        const [usuario] = await knex('Usuario').where('email', email).select('senha');
        return usuario ? usuario.senha : null;
    }
}

module.exports = AuthRepository;