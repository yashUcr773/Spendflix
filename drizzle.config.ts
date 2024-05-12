import { defineConfig } from 'drizzle-kit'
import { config } from 'dotenv'

config({ path: ".env" })

export default defineConfig({
    schema: "./db/schema.ts",
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.DRIZZLE_DATABASE_URL!,
    },
    verbose: true,
    strict: true,
})