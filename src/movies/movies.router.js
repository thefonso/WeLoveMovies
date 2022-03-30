const router = require("express").Router({ mergeParams: true });
const controller = require("./movies.controller")
const methodNotAllowed = require("../errors/methodNotAllowed");

router
    .route("/")
    .get(controller.list)
    .all(methodNotAllowed);

router
    .route("/movies?is_showing=true")
    .get(controller.moviesShowing)
    .all(methodNotAllowed);

router
    .route("/movies/:movieId")
    .get(controller.read)
    .all(methodNotAllowed);

router
    .route("/movies/:movieId/theaters")
    .get(controller.read)
    .all(methodNotAllowed);

router
    .route("/movies/:movieId/reviews")
    .get(controller.read)
    .all(methodNotAllowed);

module.exports = router;