const knex = require('../db/connection.js');

class GaleriaRepository {
    static async findAll() {
        return await knex("Galeria").select();
    }

    static async findById (){
        try {
            const image = await knex("Galeria").where('id', id).first();
            return image;
        } catch (error) {
            console.error('Error finding image by ID:', error);
            throw error;
        }
    }

    static async getImageUrlById(id_image) {
        try{
            const image = await knex("Galeria").where('id', id_image).first();
            return image ? image.url : null;
        } catch (error) {
            console.error('Erro ao verificar url da imagem', error);
            throw error;
        } 
    }

    static async create(data) {
        return await knex("Galeria").insert(data);
    }

    static async delete(id) {
        return await knex("Galeria").where("id", id).del();
    }
}

module.exports = GaleriaRepository;
