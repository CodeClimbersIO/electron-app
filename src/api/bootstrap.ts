import { Express } from 'express'
import { initMigrations } from './db/migrate'
import { buildRoutes } from './router'

export async function bootstrap(app: Express) {
  const routes = buildRoutes()
  app.use('/', routes)
  await initMigrations()
}
