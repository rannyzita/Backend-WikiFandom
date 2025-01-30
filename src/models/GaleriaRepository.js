const knex = require('../db/connection.js');
const { v4: uuidv4 } = require('uuid');

class GaleriaRepository {
    static async findAll() {
        return await knex("Galeria").select();
    }

    static async findById(id_imagem) {
        try {
            const result = await knex('Galeria').select('id').where({ id: id_imagem }).first();
            console.log("Resultado do findById:", result);
            return result;
        } catch (error) {
            console.error("Erro no findById:", error);
            throw error;
        }
    }    

    static async getImageUrlById(id_imagem) {
        try{
            const imagem = await knex("Imagem").where('id', id_imagem).first();
            return imagem ? imagem.url : null;
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

    static async adicionarImagemNaGaleria(idImagem, decricaoImagem) {
        const imagemExistente = await knex('Galeria').where({ id_imagem: idImagem }).first();
    
        if (!imagemExistente) {
            return await knex('Galeria').insert({
                id: uuidv4(),  // Gerando um novo id para cada imagem adicionada
                id_imagem: idImagem,
                descricao: decricaoImagem
            });
        } else {
            return await false;
        }  
    }
    
}

module.exports = GaleriaRepository;
