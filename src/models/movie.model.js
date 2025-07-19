import db from '../config/db.js'

export const findMovies = () => {
    return db('series_film').select('*')
}

export const findMovieById = (id) => {
    return db('series_film').where({ id }).first()
}

export const insertMovie = (data) => {
    return db('series_film').insert(data)
}

export const editMovie = (id, data) => {
    return db('series_film').where({ id }).update(data)
}

export const deleteMovie = (id) => {
    return db('series_film').where({ id }).del()
}
