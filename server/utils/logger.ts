import fs from 'node:fs'
import path from 'node:path'

import winston from 'winston'

const isProduction = process.env.NODE_ENV === 'production'

const logsDir = path.join(process.cwd(), 'logs')
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir)
}

const logger = winston.createLogger({
  level: isProduction ? 'error' : 'debug',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level}: ${message}`
    }),
  ),
  transports: [
    new winston.transports.File({
      filename: path.join(logsDir, 'error.log'),
      level: 'error',
    }),

    ...(isProduction
      ? []
      : [new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple(),
          ),
        })]
    ),
  ],
})

export default logger
