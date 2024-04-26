const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')


const app = express();

const dbURI = 'mongodb+srv://user1503:test1503@cluster0.bysuedc.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI)
    .then((result) => {
        console.log('connected to DB')
        app.listen(3000);})
    .catch((err) => {console.log(err)})
// Register view engine
app.set('view engine', 'ejs');







// Middleware & static files 
app.use(express.static('public'))
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));

// Get Requests
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about',{title: 'PAPA About'});
});

// Blog routes
app.use('/blogs', blogRoutes);


// 404 Page
app.use((req, res) => {
    res.status(404).render('404', {title: 'PAPA 404'});
});