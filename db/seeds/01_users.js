
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'cindy', 
          email: 'cindy@gmail.com', 
          password: 'password'
        },
        {
          username: 'test', 
          email: 'test@gmail.com', 
          password: 'password'
        },
        {
          username: 'test2', 
          email: 'test2@gmail.com', 
          password: 'password'
        }
        
      ]);
    });
};
