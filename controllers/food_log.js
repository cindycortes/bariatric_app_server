const knex = require('../db/knex')

module.exports = {
  getAll(req, res) {
    knex('food_log').then(foodLogs => res.json(foodLogs))
  },
  getOne(req, res) {
    knex('food_log')
      .where('id', req.params.id)
      .then(foodLog => res.json(foodLog))
  },
  addOne(req, res) {
    knex('food_log')
      .insert(req.body)
      .returning('*')
      .then(newFoodLog => res.json(newFoodLog))
  },
  updateOne(req, res) {
    knex('food_log')
      .where('id', req.params.id)
      .update(req.body)
      .returning('*')
      .then(updatedFoodLog => res.json(updatedFoodLog))
  },
  deleteFoodLog(req, res) {
    knex('food_log')
      .where('id', req.params.id)
      .del()
      .returning('*')
      .then(deletedFoodLog => res.json(deletedFoodLog))
  }
}