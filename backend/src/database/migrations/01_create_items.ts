import Knex from 'knex'; //Letra maiúscula: tipo da variável

// Realizar alterações no banco
// Criar tabela
export async function up(knex: Knex) {
  return knex.schema.createTable('items', (table) => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('title').notNullable();
  });
}

// Desfazer alterações no banco - o contrário feito no up()
// Deletar tabela
export async function down(knex: Knex) {
  return knex.schema.dropTable('items');
}
