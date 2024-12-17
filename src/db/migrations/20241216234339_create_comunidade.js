const { v4: uuidv4 } = require("uuid");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("Comunidade", function(table) {
        table.uuid("id").primary().defaultTo(uuidv4());
        table.string("nome", 45).notNullable();
        table.string("descricao", 100);
        table.date("data_criacao").notNullable();
        table.uuid("id_usuario").notNullable()
        .references("id").inTable("Usuario")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("Comunidade");
};
