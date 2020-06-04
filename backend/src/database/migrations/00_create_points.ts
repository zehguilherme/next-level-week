import Knex from 'knex'; //Letra maiúscula: tipo da variável

// Realizar alterações no banco
// Criar tabela
export async function up(knex: Knex) {
  return knex.schema.createTable('points', (table) => {
    table.increments('id').primary();
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

// Desfazer alterações no banco - o contrário feito no up()
// Deletar tabela
export async function down(knex: Knex) {
  return knex.schema.dropTable('points');
}
