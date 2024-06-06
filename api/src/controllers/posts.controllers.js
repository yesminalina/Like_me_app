import { findAllPostsDb, insertOnePostDb, updateOnePostDb, deleteOnePostDb } from '../models/posts.dao.js'

export const getPosts = (req, res) => findAllPostsDb()
  .then((allPosts) => res.status(200).json({ status: true, code: 200, data: allPosts }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const createOnePost = (req, res) => {
  const { titulo, url, descripcion, likes } = req.body
  insertOnePostDb(titulo, url, descripcion, likes)
    .then((result) => res.status(201).json({ status: true, code: 200, message: result }))
    .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
}

export const putPostLikes = (req, res) => {
  const { id } = req.params
  updateOnePostDb(id)
    .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
    .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
}

export const deleteOnePost = (req, res) => {
  const { id } = req.params
  deleteOnePostDb(id)
    .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
    .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
}

export const notFound = (req, res) => {
  res.status(404).json({ status: false, code: 500, message: 'Página no encontrada' })
}
