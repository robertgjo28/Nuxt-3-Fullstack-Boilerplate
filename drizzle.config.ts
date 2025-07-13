import type { Config } from 'drizzle-kit'

const config = useRuntimeConfig()

export default {
  schema: './server/db/schema',
  out: './server/db/drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    host: (config.dbHost || process.env.DB_HOST) as string,
    port: config.dbPort ? Number.parseInt(config.dbPort) : 5432,
    user: (config.dbUser || process.env.DB_USER) as string,
    password: (config.dbPassword || process.env.DB_PASSWORD) as string,
    database: (config.dbName || process.env.DB_NAME) as string,
  },
} satisfies Config
