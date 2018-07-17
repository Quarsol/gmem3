const knex = require('./knexConfig.js')

module.exports = {
    list(){
      return knex('game')
        .select()
        .orderBy('id')
    },
    read(id){
      return knex('game')
        .select()
        .where('id', id).first()
    },
    create(game){
      return knex('game')
        .select()
        .insert(game)
        .returning('*')
    },
    update(id, game){
      return knex('game')
        .select()
        .where('id', id)
        .update(game)
        .returning('*')
    },
    delete(id){
      return knex('game')
        .select()
        .delete()
        .where('id', id)
    }
};
