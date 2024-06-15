import express from 'express'
import { bootstrap } from './bootstrap'

const app = express()
const port = process.env.PORT || 8080

bootstrap(app)

export function startServer() {
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
  })
}

startServer()
