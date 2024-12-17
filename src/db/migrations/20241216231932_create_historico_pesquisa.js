const { v4: uuidv4 } = require('uuid');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("Historico_Pesquisa", function(table) {
        table.uuid("id").primary().defaultTo(uuidv4());
        table.string("termo_buscado", 100);
        table.date("data_da_busca").notNullable();
        // chave primária
        table.uuid("id_usuario").notNullable()
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
    return knex.schema.dropTable("Historico_Pesquisa");
};
