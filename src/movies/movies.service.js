const knex = require("../db/connection");

function read(movieId) {
    return knex("movies")
        .select("*")
        .where({ movie_id: movieId })
        .first();
}

function moviesShowing() {
    return knex("movies_theaters")
        .select("*")
        .where({ "is_showing": true })
}


module.exports = {
    read,
    moviesShowing,
}