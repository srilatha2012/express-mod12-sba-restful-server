//Import express
const express = require("express");

//create a new router object for movie routes
const movieRouter = express.Router();

//Import movie controller functions
const movieController = require("../controllers/movieController");

//Route to fetch details for a specific movie using movie id
movieRouter.get("/movies/:id",movieController.getMovieDetails); //assign the function references directly to the route

//Route to handle movie search requests
movieRouter.get("/search", movieController.searchMovies); //assign the function references directly to the route

//Export the router
module.exports =movieRouter