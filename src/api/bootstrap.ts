import { Express } from 'express'
import router from './controllers/app.controller'

export function bootstrap(app: Express) {
  app.use('/api', router)
}
