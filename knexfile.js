module.exports = {
    development: {
        client: 'pg',
        connection: {
          database: "my_bariatric_app",
          host: "localhost"
        },
        migrations: {
            directory: __dirname + '/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds',
          },
      },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds/production',
          },
      },
  };