// Naming convention with _
const Blog = require('../models/blog');

const blog_index = (req, res) => {
    Blog.find().sort({createdAt: -1})
    .then((result) => {
        res.render('index',{title: 'PAPA BLOGS', blogs: result})
    })
    .catch((err) => {
        console.log(err);
    });
};

const blog_details = (req, res) => {
    const  id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('blogs/blogDetail', {title: 'Papa detail', blog: result})
        })
        .catch((err) => {
            console.log(err);
        });
};

const blog_delete = (req, res) => {
    const  id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({redirect: '/blogs'});
        })
        .catch((err) => {
            console.log(err);
        });
};

const new_blog = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
    .then((result) => {
        res.redirect('/blogs');
    });
};

const new_blog_to_make = (req, res) => {
    res.render('blogs/create', {title: 'PAPA create'});
}

module.exports = {
    blog_index,
    blog_details,
    blog_delete,
    new_blog,
    new_blog_to_make
}