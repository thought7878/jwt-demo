const jwt = require('jsonwebtoken')
const { JWT_SECERET } = require('../config')

const generateToken = user => {
  return jwt.sign(user, JWT_SECERET, {
    expiresIn: 6 //单位为秒
  })
}

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization
  if (token) {
    jwt.verify(token, JWT_SECERET, function(err, decoded) {
      if (err) {
        if ((err.name = 'TokenExpiredError')) {
          return res.status(401).json({ msg: '认证码失效，请重新登陆！' })
        } else {
          return res.status(401).json({ msg: '认证失败！' })
        }
      } else {
        if (decoded.admin === true) {
          next()
        } else {
          return res.status(401).json({ msg: '认证失败！' })
        }
      }
    })
  } else {
    return res.status(403).json({ msg: '请提供认证码！' })
  }
}

module.exports = {
  generateToken,
  requireAuth
}
