import express from "express";
import { addMovie, getMovie } from "./movie.controller.js";
import validateAddMovie from "./movie.validation.js";

const router = express.Router();

router.get(
    "/movie",
    (req, res, next) => {
        getMovie(req, res, next);
    }
)

router.post(
    "/movie",
    (req, res, next) => {
        validateAddMovie(req, res, next);
        addMovie(req, res, next);
    }
)

export default router;