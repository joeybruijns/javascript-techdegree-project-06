const express = require('express');
const indexRouter = require('./routes/index');

// express() returns an Express application
const app = express();

// link the to the static files
app.use('/static', express.static('public'));

// use Pug as the view engine
app.set('view engine', 'pug');

// use the routes from the routes directory
app.use('/', indexRouter);

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
