const knex = require("../db/connection");

function list() {
    return knex("theaters as t")
        .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
        .select("*")
        .where({ "is_playing": true })
}

module.exports = {
    list,
}