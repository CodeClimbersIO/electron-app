import express from 'express'
import { bootstrap } from './bootstrap'

const app = express()
const port = process.env.PORT || 8080

export async function startServer() {
  try {
    await bootstrap(app)
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`)
    })
  } catch (e) {
    console.error(`[server]: Error starting server: ${e}`)
  }
}
