const validateAddMovie = async (req, res, next) => {
    let body = req.body;

    if (!body.name) {
        res.status(417).send("Name is required");
    } else if (!body.image) {
        res.status(417).send("Image link is required");
    } else if (!body.ratings) {
        res.status(417).send("Rating in 10/10 format is required");
    } else if (!body.description) {
        res.status(417).send("Description is required");
    } else {
        next();
    }
}

export default validateAddMovie;