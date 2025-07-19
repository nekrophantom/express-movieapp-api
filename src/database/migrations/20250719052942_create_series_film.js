/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('series_film', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('description');
    table.enu('type', ['movie', 'series']).notNullable();
    table.date('release_date');
    table.integer('duration');
    table.string('cover_url');
  });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTableIfExists('series_film');
};
