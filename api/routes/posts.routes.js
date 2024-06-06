import Router from 'express'
import { getPosts, createOnePost, putPostLikes, deleteOnePost } from '../src/controllers/posts.controllers.js'

const router = Router()

router.get('/posts', getPosts)
router.post('/posts', createOnePost)
router.put('/posts/like/:id', putPostLikes)
router.delete('/posts/:id', deleteOnePost)

export default router
