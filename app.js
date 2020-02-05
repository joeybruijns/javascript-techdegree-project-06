const express = require('express');

const {data} = require('./data.json');
//const {projects} = data;

// express() returns an Express application
const app = express();

// use Pug as the view engine
app.set('view engine', 'pug');

// serve files from the public directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log('home');
});

app.get('/about', (req, res) => {
    console.log('about');
});

app.get('/project/:id', (req, res) => {
    console.log('project');
});

// app listens on port 3000
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!');
});
