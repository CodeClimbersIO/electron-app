import { db } from './knex'

export const initMigrations = async () => {
  console.log('Running Migrations')
  try {
    // Locations of migrations is relative to project root
    await db.migrate.latest()
  } finally {
    console.log('Migrations Complete')
  }
}
