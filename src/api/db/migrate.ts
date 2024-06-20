import { knex } from './knex'

export const initMigrations = async () => {
  console.log('Running Migrations')
  try {
    // Locations of migrations is relative to project root
    await knex.migrate.latest()
  } finally {
    console.log('Migrations Complete')
  }
}
