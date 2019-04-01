const defaultError = (err, req, res, next) => {
    res.status(err.status).json(err.message);
}

module.exports = {
    defaultError,
}