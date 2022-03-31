const service = require("./reviews.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function reviewExists(req, res, next) {
    const { reviewId } = req.params;
    const review = await service.read(reviewId);

    if (review) {
        res.locals.review = review;
        return next();
    }
    return next({
        status: 404,
        message: `Review cannot be found`
    })
};

async function update(req, res) {
    const updatedReview = {
        ...req.body.data,
        review_id: res.locals.review.review_id,
    };
    const data = await service.update(updatedReview);
    res.json({ data: data[0] });
}

async function destroy(req, res, next) {
    const { review } = res.locals;
    await service.delete(review.review_id);
    res.sendStatus(204, "No Content");
};

module.exports = {
    delete: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(destroy)],
};