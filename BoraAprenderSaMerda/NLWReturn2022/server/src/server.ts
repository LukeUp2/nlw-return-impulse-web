import { routes } from './routes'
import express from 'express'
import cors from "cors"

const app = express()

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors())
app.use(routes)


app.listen(3333, () => {
  console.log('Server running!')
})