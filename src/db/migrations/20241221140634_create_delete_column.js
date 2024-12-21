const { v4: uuidv4 } = require('uuid');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable("Post", function(table) {
        table.dropColumn("url_post");
        table.uuid("id_imagem")
        .references("id").inTable("Imagem")
        // deleta os registros dependentes
        .onDelete("CASCADE")
        // atualiza os registros dependentes
        .onUpdate("CASCADE"); 
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("Post");
};
