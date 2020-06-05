import Knex from 'knex';

export async function up(knex: Knex) {
    // Metodo up parar criar as coisas
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();//auto increment
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

export async function down(knex: Knex) {
    // Voltar a tras, deletar a tabela
    //  Sempre faz o contrario do up
    return knex.schema.dropTable('items');

}
