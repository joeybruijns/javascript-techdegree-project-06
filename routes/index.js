const express = require('express');
const router = express.Router();

const projectData = require('../data.json');
const allProjects = projectData.projects;

router.get('/', (req, res) => {
    console.log('home'); // DELETE
    res.render('index', {allProjects});
});

router.get('/about', (req, res) => {
    console.log('about'); // DELETE
    res.render('about');
});

// project routes
router.get('/project/:id', (req, res) => {
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

module.exports = router;
