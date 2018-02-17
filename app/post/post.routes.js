const express = require('express');
const router = express.Router();
const controller = require('./post.controller');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const exist = require('../../middlewares/exist.middleware');

router.get('/', controller.posts);
router.post('/', exist.existsUploadsFolder, upload.single('photo'), controller.createPost);

module.exports = router;