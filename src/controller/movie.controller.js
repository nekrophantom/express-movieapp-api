import { deleteMovie, editMovie, findMovieById, findMovies, insertMovie } from "../models/movie.model.js"

export const getMovies = async (req, res, next) => {
    try {
        const movies = await findMovies()
        
        res.send({
            message: 'success',
            data: movies
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" })
    }
}

export const getMovieById = async (req, res, next) => {
    const id = parseInt(req.params.id)

    try {
        const movie = await findMovieById(id)

        if (!movie) {
            return res.status(404).json({ message: "Data not Found" })
        }

        res.json({
            message: 'success',
            data: movie
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error "})
    }
}

export const createMovie = async (req, res, next) => {
    const data = req.body;

    try {
        const [id] = await insertMovie(data)

        res.status(201).json({
            message: 'success',
            id: id
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" })
    }
}

export const updateMovie = async (req, res, next) => {
    const id = parseInt(req.params.id)
    const data = req.body

    try {
        const updateMovie = await editMovie(id, data)
        if (!updateMovie) {
            return res.status(404).json({ message: "Data not found" })
        }

        const movie = await findMovieById(id)
        res.json({
            message: "success",
            data: movie
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" })
    }
}

export const removeMovie = async (req, res, next) => {
    const id = parseInt(req.params.id)

    try {
        const deletedMovie = await deleteMovie(id)
        if (!deletedMovie) {
            return res.status(404).json({ message: "Data not found" })
        }

        res.json({
            message: "success"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" })
    }
}