import Knex from 'knex';

export async function up(knex: Knex) {
    // Metodo up parar criar as coisas
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();//auto increment
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
}

export async function down(knex: Knex) {
    // Voltar a tras, deletar a tabela
    //  Sempre faz o contrario do up
    return knex.schema.dropTable('points');

}
