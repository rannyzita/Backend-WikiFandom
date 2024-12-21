const { v4: uuidv4 } = require('uuid');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema.createTable("Usuario", function(table) {
        table.uuid('id').primary().defaultTo(uuidv4());
        table.string("nome", 45).notNullable();
        table.string("email", 45).notNullable().unique();
        table.string("senha", 45).notNullable();
        table.string("foto_perfil", 100);
        table.text("biografia");
        table.date("data_criacao").defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("Usuario");
};
