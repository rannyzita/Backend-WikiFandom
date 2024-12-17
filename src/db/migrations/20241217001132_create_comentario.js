const { v4: uuidv4 } = require('uuid');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("Comentario", function(table) {
        table.uuid("id").primary().defaultTo(uuidv4());
        table.text("conteudo", 200).notNullable();
        table.date("data_comentario").notNullable();
        table.uuid("id_usuario").notNullable()
        .references("id").inTable("Usuario")
        .onDelete("CASCADE")
        .onUpdate("CASCADE"); 
        table.uuid("id_post").notNullable()
        .references("id").inTable("Post")
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
    return knex.schema.dropTable("Comentario");
};
