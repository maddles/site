module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'site',
      user: 'madelineharris',
    },
    debug: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

}
