import { findAllPosts, insertOnePost } from '../models/posts.dao.js'

export const getPosts = (req, res) => findAllPosts()
  .then((allPosts) => res.status(200).json({ status: true, code: 200, data: allPosts }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const createOnePost = (req, res) => {
  const { titulo, url, descripcion, likes } = req.body
  insertOnePost(titulo, url, descripcion, likes)
    .then((result) => res.status(201).json({ status: true, code: 200, message: result }))
    .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
}
