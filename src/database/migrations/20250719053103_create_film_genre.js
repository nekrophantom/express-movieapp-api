/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('film_genre', (table) => {
    table.increments('id').primary();
    table
      .integer('film_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('series_film')
      .onDelete('CASCADE');
    table
      .integer('genre_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('genre')
      .onDelete('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTableIfExists('film_genre');
};
