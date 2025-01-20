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
}

module.exports = AuthRepository;