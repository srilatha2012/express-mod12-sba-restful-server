# Movie API App

A simple Express app that uses the OMDB API to search movies and get movie details.

## Features
- Search movies by title
- Get movie details by IMDb ID
- Uses Express routes and controllers
- Uses Axios to call external API

## Install
- npm install

## ENVIRONMENT VARIABLES
PORT=4040
OMDB_API_KEY=your_api_key_here

## Run
nodemon

## API Routes
search movoies : GET http://localhost:4040/api/search?title=batman
Get movie details : GET http://localhost:4040/api/movies/tt0372784