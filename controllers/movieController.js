//Import axios
const axios = require("axios");

//Get API key from .env file
const OMDB_API_KEY = process.env.OMDB_API_KEY;

//Base URL for OMDB API
const BASE_URL = "http://www.omdbapi.com/";

const searchMovies = async (req, res) => {
    const title = req.query.title;

    //check if title parameter is missing
    if (!title) {
        return res.status(400).json({ error: "Title query parametr is required" });
    }
    try {
        //await the axios GET requests
        //Send GET request to OMDB API to search movies by title
        const response = await axios.get(BASE_URL, {
            params: {
                s: title,
                apikey: OMDB_API_KEY
            },
        });
        // the data is already parsed and available in response.data
        res.json(response.data);

    } catch (error) {
        console.log('OMDB API Error', error.message);
        res.status(500).json({ message: 'Error fetching the data from OMDB API' });
    }

}

const getMovieDetails = async (req, res) => {

    //path parameter
    const id = req.params.id

    try {
        //send GET request to OMDB API to fetch movie details by IMDB id 
        const response = await axios.get(BASE_URL, {
            params: {
                i: id,
                apikey: OMDB_API_KEY
            }
        });
        //The data is already parsed and available in response.data
        res.json(response.data);

    } catch (error) {
        console.log("OMDB API ERROR", error.message);
        res.status(500).json({ message: 'Error fetching the data from OMDB API' })

    }

}

//Export an object containing the functions
module.exports = { searchMovies, getMovieDetails }