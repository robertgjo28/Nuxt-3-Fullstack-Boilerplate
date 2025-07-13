import logger from '../../utils/logger'
import { closeDb, useDb } from '../init.db'
import { testTable } from '../schema'
import { testSeedData } from './seeders/test.seed'

async function seedDatabase() {
  const db = useDb()
  if (!db) {
    logger.error('Database instance is not initialized')
    throw new Error('Database instance is not initialized')
  }

  logger.info('Starting database seeding... 🚀🚀🚀')
  try {
    await db.transaction(async (tx) => {
      // Add seed data to the testTable
      await tx.insert(testTable).values(testSeedData)
    })
  }
  catch (error) {
    logger.error('Seeding failed:', error)
    throw error
  }
  finally {
    logger.info('Database seeding completed successfully! 🎉')
    await closeDb()
  }
}

seedDatabase().catch((err) => {
  console.error('Seeding failed:', err)
  process.exit(1)
})
