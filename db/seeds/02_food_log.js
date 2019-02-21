
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('food_log').del()
    .then(function () {
      // Inserts seed entries
      return knex('food_log').insert([
        {
          phase: 'pre-op',
          date: '02-20-2019',
          meal_of_the_day: 'breakfast',
          protein: 'chicken',
          water_intake: '8oz'
        
        },
        {
          phase: 'pre-op',
          date: '02-20-2019',
          meal_of_the_day: 'lunch',
          protein: 'fish',
          water_intake: '12oz'
        },
        {
          phase: 'pre-op',
          date: '02-20-2019',
          meal_of_the_day: 'dinner',
          protein: 'lunch meat',
          water_intake: '12oz'
        },
        {
          phase: 'pre-op',
          date: '02-20-2019',
          meal_of_the_day: 'snack',
          protein: 'protein shake',
          water_intake: '12oz'
        }

        
      ]);
    });
};
