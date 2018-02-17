const express = require('express');
const router = express.Router();
const controller = require('./post.controller');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/', controller.posts);
router.post('/', upload.single('photo'), controller.createPost);

module.exports = router;