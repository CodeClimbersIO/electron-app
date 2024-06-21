import express from 'express'
import healthController from './health.controller'
const routes = express.Router()

export const v1Routes = () => {
  routes.use('/health', healthController)
  return routes
}
