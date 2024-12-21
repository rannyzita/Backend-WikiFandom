const { v4: uuidv4 } = require('uuid');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("Noticia", function(table) {
        table.uuid("id").primary().defaultTo(uuidv4());
        table.date("data_envio").defaultTo(knex.fn.now());
        table.string("titulo", 45).notNullable();
        table.text("conteudo", 300).notNullable();
        table.text("url_noticia", 300).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("Noticia");
};
