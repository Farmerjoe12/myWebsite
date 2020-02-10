const express = require('express')
let router = express.Router();

require('../services/email.service');

// Home page
router.get("/", function(req, res) {
    res.render("home", {
      title: "Home Page"
    });
});

// Real estate page
router.get("/real-estate", function(req, res) {
    res.render("real-estate", {
        title: "Real Estate Investor"
    });
});

// Software Page
router.get("/software", function(req, res) {
    res.render("software", {
        title: "Software Engineer"
    });
});

// Business page
router.get("/business", function(req, res) {
    res.render("business", {
        title: "Entrepreneur"
    });
});

// Blog page
router.get("/blog", function(req, res)  {
    res.render("blog", {
        title: "Blog"
    });
});

// Form submission
router.post("/form", function(req, res) {

    // TODO: Delegate into a controller / service?
    let name = req.body.name;
    let email = req.body.email;
    let comments = req.body.comments;

    sendEmailFromForm(name, email, comments);

    res.status(200).redirect('back');
});

module.exports = router;