import Router from 'express'
import { getPosts, createOnePost } from '../src/controllers/posts.controllers.js'

const router = Router()

router.get('/posts', getPosts)
router.post('/posts', createOnePost)

export default router
