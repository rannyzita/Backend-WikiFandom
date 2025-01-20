const knex = require('../db/connection.js');

class PostRepository {
    static async findAll() {
        return await knex("Post").select();
    }

    static async create(data) {
        return await knex("Post").insert(data);
    }

    static async update(id, data) {
        return await knex("Post").where("id", id).update(data);
    }

    static async delete(id) {
        return await knex("Post").where("id", id).del();
    }
}

module.exports = PostRepository;
