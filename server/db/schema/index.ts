import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const testTable = pgTable('test_table', {
  id: serial('id').primaryKey(),
  message: text('message'),
  createdAt: timestamp('created_at').defaultNow(),
})

export type TestTable = typeof testTable.$inferSelect // Get return type
export type NewTestTable = typeof testTable.$inferInsert // Get insert type
