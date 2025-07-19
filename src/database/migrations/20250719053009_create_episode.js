/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('episode', (table) => {
    table.increments('id').primary();
    table
      .integer('series_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('series_film')
      .onDelete('CASCADE');
    table.string('title').notNullable();
    table.integer('episode_number');
    table.integer('duration');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTableIfExists('episode');
};
