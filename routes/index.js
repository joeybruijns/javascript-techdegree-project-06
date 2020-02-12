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

    const {id} = req.params;
    
    const name = allProjects[id].project_name;
    const description = allProjects[id].description;
    const technologies = allProjects[id].technologies;
    const liveDemo = allProjects[id].live_link;
    const githubLink = allProjects[id].github_link;
    const images = allProjects[id].image_urls;

    const projectData = {name, description, technologies, liveDemo, githubLink, images};

    res.render('project', projectData);
});

module.exports = router;
