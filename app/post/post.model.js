const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  imageUrl: String
});

PostSchema.set('timestamps', true);

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
