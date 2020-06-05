import Knex from 'knex';

export async function up(knex: Knex) {
    // Metodo up parar criar as coisas
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();//auto increment
        table.integer('point_id')
        .notNullable()
        .references('id')
        .inTable('points');
        table.integer('item_id')
        .notNullable()
        .references('id')
        .inTable('items');
    });
}

export async function down(knex: Knex) {
    // Voltar a tras, deletar a tabela
    //  Sempre faz o contrario do up
    return knex.schema.dropTable('point_items');

}
