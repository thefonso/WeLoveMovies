const service = require("./movies.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function movieExists(req, res, next) {
    const { movieId } = req.params;

    const movie = await service.read(movieId);
    if (movieId) {
        res.locals.movie = movie;
        return next();
    }
    return next({
        status: 404,
        message: `Movie cannot be found.`
    });
}

async function list(req, res, next) {
    const movieList = await service.list();
    res.json({ data: movieList });
}

async function moviesShowing(req, res, next) {
    const moviesThatAreShowing = await service.moviesShowing();
    res.json({ data: moviesShowing })
}

async function read(req, res, next) {
    const knexInstance = req.app.get("db");
    const { movies } = res.locals;
    res.json({ data: movies });
}