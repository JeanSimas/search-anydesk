import express from 'express'
import { ApiRouter } from './api.routes'

const app = express()
const port = process.env.PORT || 3333
app.use(express.json())

app.use('/api', ApiRouter)

app.listen(port, () => console.log(`Server open on port ${port}`))