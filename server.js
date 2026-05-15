//DEPENDENCIES
//load the environment variables from .env file
require("dotenv").config();

//import express 
const express = require("express");

//create an express application
const app = express();

//Import movie routes
const movieRoutes = require("./routes/movieRoutes")

//define the port number
const PORT = process.env.PORT || 3000;

//MIDDLEWARE
//Mount Movie routes under the api path
app.use("/api" , movieRoutes);


//PORT
//start the server and listen for incoming requests 
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});