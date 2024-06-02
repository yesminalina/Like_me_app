import db from '../server/database/db.js'

export const findAllPosts = () => db('SELECT * FROM posts')

export const insertOnePost = (titulo, img, descripcion, likes = 0) => db('INSERT INTO posts (titulo, img, descripcion, likes) values ($1, $2, $3, $4) RETURNING *', [titulo, img, descripcion, likes])
