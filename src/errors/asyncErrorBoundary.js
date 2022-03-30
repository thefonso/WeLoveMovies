export default function asyncErrorBoundary(delegate, defaultStatus) {
    return (req, res, next) => {
        Promise.resolve()
            .then(() => delegate(request, response, next))
            .catch((error = {}) => {
                const { status = defaultStatus, message = error } = error;
                next({
                    status,
                    message,
                });
            });
    };
};