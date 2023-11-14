import DB from "./DB";

import { migrate } from "drizzle-orm/better-sqlite3/migrator";

await migrate(DB, { migrationsFolder: "migrations" });