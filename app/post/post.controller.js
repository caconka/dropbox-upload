const Post = require('./post.model');
const fs = require('fs');
const upload = require('../../config/dropbox.config');

function posts (req, res, next) {
  Post.find({})
  .then(posts => res.render('index', {posts, title: 'dropbox-upload'}))
  .catch(err => next(err));
}

function createPost (req, res, next) {
  fs.readFile(req.file.path, (err, fileContent) => {
    upload.getUrl(req.file.filename, fileContent)
    .then(url => {
      const post = new Post({
        title: req.body.title,
        imageUrl: `https://dl.dropboxusercontent.com/s${url}`
      })
      post.save()
      .then(() => res.redirect('/'))
    })
  })
}

module.exports = {
  posts,
  createPost
}