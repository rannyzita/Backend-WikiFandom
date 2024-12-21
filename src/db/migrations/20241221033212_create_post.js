const { v4: uuidv4 } = require('uuid');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("Post", function(table) {
        table.uuid("id").primary().defaultTo(uuidv4());
        table.string("titulo", 45).notNullable();
        table.text("conteudo", 300).notNullable();
        table.date("data_criacao").defaultTo(knex.fn.now());
        table.text("url_post", 300).notNullable();
        // chave primária
        table.uuid("id_usuario")
        .references("id").inTable("Usuario")
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
