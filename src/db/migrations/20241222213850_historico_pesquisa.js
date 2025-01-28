/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("Historico_Pesquisa", function(table) {
        table.uuid("id").primary().defaultTo(uuidv4());
        table.string("termo_buscado", 100);
        table.datetime("data_busca").defaultTo(knex.fn.now());
    
        // Adicionar uma nova coluna para armazenar o id_usuario
        table.uuid("id_usuario").notNullable();
    
        // Criar uma chave estrangeira para associar o histórico de pesquisa com o usuário
        table.foreign("id_usuario")
            .references("id")
            .inTable("Usuario")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */P
exports.down = function(knex) {
    return knex.schema.dropTable("Historico_Pesquisa");
};
