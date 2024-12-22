class FavoritoRepository {
    static async findAllByUserId(id_usuario) {
        return await knex("Favorito").where("id_usuario", id_usuario);
    }

    static async create(data) {
        return await knex("Favorito").insert(data);
    }

    static async delete(id_usuario, id_post) {
        return await knex("Favorito").where("id_usuario", id_usuario).andWhere("id_post", id_post).del();
    }
}

module.exports = FavoritoRepository;
