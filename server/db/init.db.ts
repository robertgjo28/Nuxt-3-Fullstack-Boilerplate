import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

let dbInstance: ReturnType<typeof drizzle> | null = null
let pool: Pool | null = null

export function useDb() {
  const config = useRuntimeConfig()

  if (dbInstance)
    return dbInstance

  pool = new Pool({
    host: config.dbHost,
    port: config.dbPort ? Number.parseInt(config.dbPort) : 5432,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
  })

  dbInstance = drizzle(pool)
  return dbInstance
}

export async function closeDb() {
  if (pool) {
    await pool.end()
    pool = null
    dbInstance = null
  }
}
