const knexWrapper = require('./knexWrapper')
const KnexOrm = require('knex-orm')
const KnexOrmConstructor = KnexOrm.default

const Database = new KnexOrmConstructor(knexWrapper)

class Post extends Database.Model {
  static get primaryKey() { return 'id' }

  static get whitelistedProps() {
    return ['id', 'post_title', 'post_body']
  }

  static get jsonSchema () {
    return {
      type: 'object',
      properties: {
        id: { type: 'integer'},
        post_title: { type: 'string' },
        post_body: { type: 'string' }
      },
      required: ['post_title'],
    }
  }

  static get related () {
    return {
      post: this.belongsTo('Posts'),
    };
  }
}

class Posts extends Database.Model {
  static get primaryKey() { return 'rank' }

  static get related() {
    return {
      post: this.hasMany('Post'),
    }
  }
}

Database.register(Post)
Database.register(Posts)

var exports = module.exports = {}

exports.Post = Post
exports.Posts = Posts
