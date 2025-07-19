import { Router } from "express";
import { createMovie, getMovieById, getMovies, removeMovie, updateMovie } from "../controller/movie.controller.js";

const router = Router()

router.get('/', getMovies)
router.get('/:id', getMovieById)
router.post('/', createMovie)
router.put('/:id', updateMovie)
router.delete('/:id', removeMovie)

export default router