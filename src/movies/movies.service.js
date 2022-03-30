const knex = require("../db/connection");

function read(movieId) {
    return knex("movies")
        .select("*")
        .where({ movie_id: movieId })
        .first();
}

function readTheaters(movieId) {
    return knex("movies")
        .select("*")
        .where({ movie_id: movieId })
        .join()
}

function readReviews(movieId) {

}


module.exports = {
    create,
    read,
    readTheaters,
    readReviews,
}