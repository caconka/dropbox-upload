const fs = require('fs');

module.exports.existsUploadsFolder = (req, res, next) => {
  if (fs.existsSync('uploads/')) {
    next();
  } else {
    fs.mkdirSync('uploads/')
    next()
  }
}
