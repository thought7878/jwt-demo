const User = require('../models/user')
const { generateToken } = require('../utils/jwt')

exports.signup = async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.json({
      msg: 'user saved'
    })
  } catch (error) {
    res.status(406).json({ msg: '用户名重复', error })
  }
}

exports.login = async (req, res) => {
  const { username, password } = req.body
  try {
    const u = await User.findOne({ username })
    if (!u.comparePassword(password)) throw Error('密码错误！')
    res.json({ token: generateToken({ username }) })
  } catch (error) {
    res.status(406).json({ msg: '用户名密码错误' })
  }
}
