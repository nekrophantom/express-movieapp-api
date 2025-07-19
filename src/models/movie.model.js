import db from '../config/db.js'

export const findMovies = () => {
    return db('movies').select('*')
}

export const findMovieById = (id) => {
    return db('movies').where({ id }).first()
}

export const insertMovie = (data) => {
    return db('movies').insert(data)
}

export const editMovie = (id, data) => {
    return db('movies').where({ id }).update(data)
}

export const deleteMovie = (id) => {
    return db('movies').where({ id }).del()
}
