import { Express } from 'express'
import router from './controllers/app.controller'
import { initMigrations } from './db/migrate'

export async function bootstrap(app: Express) {
  app.use('/api', router)
  await initMigrations()
}
