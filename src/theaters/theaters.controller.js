const service = require("./theaters.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const reduceProperties = require("../utils/reduce-properties");
const mapProperties = require("../utils/map-properties");

async function list() {
    const listedTheaters = await service.list();
    const addMovies = mapProperties({
        movie_id: "movies[0].movie_id",
        title: "movies[0]",
        rating: "movies[0].rating",
    })

}