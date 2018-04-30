const knexWrapper = require('./knexWrapper')
const KnexOrm = require('knex-orm')
const KnexOrmConstructor = KnexOrm.default

const Database = new KnexOrmConstructor(knexWrapper)

class User extends Database.Model {
  static get primaryKey() { return 'id' }

  static get whitelistedProps() {
    return ['id', 'username', 'password', 'type']
  }

  static get jsonSchema () {
    return {
      type: 'object',
      properties: {
        id: { type: 'integer'},
        username: { type: 'string' },
        password: { type: 'string' },
        type: { type: 'string' }
      },
      required: ['username'],
    }
  }

  static get related () {
    return {
      user: this.belongsTo('Users'),
    };
  }
}

class Users extends Database.Model {
  static get related() {
    return {
      users: this.hasMany('User'),
    }
  }
}

Database.register(User)
Database.register(Users)

var exports = module.exports = {}

exports.User = User
exports.Users = Users
