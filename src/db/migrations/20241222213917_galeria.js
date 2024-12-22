const { v4: uuidv4 } = require('uuid');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("Galeria", function(table) {//+
        table.uuid("id").primary().defaultTo(uuidv4());
        table.datetime("data_envio").defaultTo(knex.fn.now());
	    table.text("descricao", 100);
        table.uuid("id_imagem").notNullable()
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
    return knex.schema.dropTable("Galeria");
};
