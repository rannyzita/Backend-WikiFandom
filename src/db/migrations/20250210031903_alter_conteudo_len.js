/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// alterando tabela de post
exports.up = function(knex) {
    return knex.schema.table('Post', function(table) {
        table.string('conteudo', 3100).alter(); 
        table.string('titulo', 100).alter();// Altera o tamanho da coluna 'url_post'
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
