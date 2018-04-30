module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'blog',
      user: 'madelineharris',
      password: 'root'
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
