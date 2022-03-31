const service = require("./theaters.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const reduceProperties = require("../utils/reduce-properties");
const mapProperties = require("../utils/map-properties");


async function readMoviesTheatersId(req, res, next) {
    const theaterId = req.params.theaterId;
    const data = await service.readMoviesTheatersId(theaterId);
}

async function list(req, res, next) {
    const listedTheaters = await service.list();
    const data = await Promise.all(listedTheaters.map(theater => {
        const movies = await service.readMoviesTheatersId(theater.theater_id);
        theater.movies = movies;
        return theater
    }))
    res.json({ data: data });
}

module.exports = {
    list: asyncErrorBoundary(list),
    readMoviesTheatersId: asyncErrorBoundary(readMoviesTheatersId),
}