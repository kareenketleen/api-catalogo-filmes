import { Knex } from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("movies", (table) => {
    table.increments("id").primary();
    table.string("author").notNullable();
    table.string("title").notNullable();
    table.string("description", 1000).notNullable();
    table.string("image").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("movies");
}
