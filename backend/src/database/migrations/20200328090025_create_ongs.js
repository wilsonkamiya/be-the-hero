exports.up = function(knex) {
 return knex.schema.createTable('ongs',function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf',2).notNullable();
  });
};

//se der problema o que fazer para desfazer o que eu fiz
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');npx
};
