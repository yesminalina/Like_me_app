import express from 'express'
import cors from 'cors'
import postsRoutes from '../../routes/posts.routes.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use('/', postsRoutes)

app.listen(PORT, () => console.log(`SERVER ON http://localhost${PORT} 🚀`))
