/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('Post', function(table) {
        table.string('categoria').notNullable(); // Adiciona a coluna 'categoria'
        table.string('url_post', 1000).alter(); // Altera o tamanho da coluna 'url_post'
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
