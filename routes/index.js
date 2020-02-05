const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('home');
});

router.get('/about', (req, res) => {
    console.log('about');
});
