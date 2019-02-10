const User = require('./controllers/user')
const Post = require('./controllers/post')
const { requireAuth } = require('./utils/jwt')

module.exports = app => {
  // user
  app.post('/user/signup', User.signup)
  app.post('/user/login', User.login)
  // post
  app.post('/post', requireAuth, Post.new)
  app.get('/posts', Post.posts)
}
