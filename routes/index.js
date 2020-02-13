const express = require('express');
const router = express.Router();

const projectData = require('../data.json');
const allProjects = projectData.projects;

// home route
router.get('/', (req, res) => {
    res.render('index', {allProjects});
});

// about route
router.get('/about', (req, res) => {
    res.render('about');
});

// project route
router.get('/project/:id', (req, res) => {
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
