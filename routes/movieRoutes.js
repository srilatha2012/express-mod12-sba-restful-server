//Import express
const express = require("express");

//create a new router object for movie routes
const movieRouter = express.Router();

//Import movie controller functions
const movieController = require("../controllers/movieController");

//Route to fetch details for a specific movie using movie id
movieRouter.get("/movies/:id" , (req,res) => {
    res.send(`Movie 1`);
});

//Route to handle movie search requests
movieRouter.get("/search", (req,res) =>{
   res.send(`Movie 2`);
});

//Export the router
module.exports =movieRouter