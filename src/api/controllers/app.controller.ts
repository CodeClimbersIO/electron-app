import express, { Request, Response } from 'express'
const appController = express.Router()

// Controller logic goes here
appController.get('/app', (_: Request, res: Response) => {
  res.send('Hello World!')
})

export default appController
