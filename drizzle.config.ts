import type { Config } from "drizzle-kit";
 
export default {
  schema: "./services/schema.ts",
  out: "./migrations"
} satisfies Config;