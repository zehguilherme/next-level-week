/* eslint-disable no-unused-vars */
import Knex from 'knex'; // Letra maiúscula: tipo da variável

/*
 * Realizar alterações no banco
 * Criar tabela
 */
export async function up(knex: Knex) {
  return knex.schema.createTable('point_items', (table) => {
    table.increments('id').primary();
    table.integer('point_id').notNullable().references('id').inTable('points');

    table.integer('item_id').notNullable().references('id').inTable('items');
  });
}

/*
 * Desfazer alterações no banco - o contrário feito no up()
 * Deletar tabela
 */
export async function down(knex: Knex) {
  return knex.schema.dropTable('point_items');
}
