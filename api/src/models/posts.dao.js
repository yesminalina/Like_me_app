import db from '../server/database/db.js'

export const findAllPostsDb = () => db('SELECT * FROM posts ORDER BY id')

export const insertOnePostDb = (titulo, img, descripcion, likes = 0) => db('INSERT INTO posts (titulo, img, descripcion, likes) values ($1, $2, $3, $4) RETURNING *', [titulo, img, descripcion, likes])

export const updateOnePostDb = (id) => db('UPDATE posts SET likes = (likes + 1) WHERE id = $1 RETURNING *', [id])

export const deleteOnePostDb = (id) => db('DELETE FROM posts WHERE id = $1', [id])
