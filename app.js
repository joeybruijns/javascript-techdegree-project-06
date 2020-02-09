const express = require('express');

const {projectData} = require('../data.json');

// express() returns an Express application
const app = express();

// link the to the static files
app.use('/static', express.static('public'));

// use Pug as the view engine
app.set('view engine', 'pug');

// homepage route
app.get('/', (req, res) => {
    console.log('home'); // DELETE
    res.render('index', {projectData});
});

// about page route
app.get('/about', (req, res) => {
    console.log('about'); // DELETE
    res.render('about');
});

// project routes
app.get('/project/:id', (req, res) => {
    console.log('project'); // DELETE
    
    // const name = data[id].project_name;
    // const description;
    // const technologies;
    // const liveDemo;
    // const githubLink;
    // const images;

    //const projectData = {name};
    // const projectData = {name, description, technologies, 
    //                     liveDemo, githubLink, images};

    //res.render('project', projectData);
    res.render('project');
});

// Error Handling
app.use((req, res, next) => {
    const err = new Error('Sorry, this page doesn\'t exist..');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    console.log(`Status: ${err.status}, page not found.`);
    res.render('error', err);
});

// app listens on port 3000
app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});
