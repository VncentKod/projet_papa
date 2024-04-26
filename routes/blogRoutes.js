const express = require('express');
const blogController = require('../controllers/blogController')

const router = express.Router();



router.get('/', blogController.blog_index);

router.post('/', blogController.new_blog);

router.get('/create', blogController.new_blog_to_make);

router.get('/:id', blogController.blog_details);

router.delete('/:id', blogController.blog_delete);

module.exports = router;