import { migrate } from 'drizzle-orm/node-postgres/migrator'
import logger from '../utils/logger'
import { closeDb, useDb } from './init.db'

async function generateMigration() {
  const db = useDb()
  if (!db) {
    logger.error('Database instance is not initialized')
    throw new Error('Database instance is not initialized')
  }

  logger.info('Starting migration generation... 🚀🚀🚀')

  await migrate(db, {
    migrationsFolder: './server/db/drizzle/migrations',
  })

  logger.info('Migration generation completed successfully! 🎉')

  logger.info('Closing database connection...')
  await closeDb()
}

generateMigration().catch((err) => {
  logger.error('Migration generation failed:', err)
  process.exit(1)
})
