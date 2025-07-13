import { sql } from 'drizzle-orm'
import { useDb } from '../db/init.db'
import { testTable } from '../db/schema/'

export default defineEventHandler(async () => {
  const db = useDb()

  await db.execute(
    sql.raw(`
      CREATE TABLE IF NOT EXISTS test_table (
        id SERIAL PRIMARY KEY,
        message TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `),
  )

  await db.insert(testTable).values({
    message: 'Hello from Nuxt + Drizzle!',
  })

  const latest = await db
    .select()
    .from(testTable)
    .orderBy(testTable.id)
    .limit(1)

  return {
    status: 'OK',
    inserted: latest,
    timestamp: new Date().toISOString(),
  }
})
