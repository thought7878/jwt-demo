const Post = require('../models/post')
exports.new = async (req, res) => {
  try {
    const post = new Post(req.body)
    await post.save()
    res.json({
      id: post._id,
      title: post.title,
      body: post.body
    })
  } catch (error) {
    res.status(500).json({ msg: '保存错误' })
  }
}

exports.posts = async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (error) {
    res.status(500).json({ msg: '服务器出错了' })
  }
}
