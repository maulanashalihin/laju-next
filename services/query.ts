import { eq, sql } from "drizzle-orm";
import DB from "./DB";
import { users } from "./schema";


export const all_users = DB.select().from(users)
.where(eq(users.email, sql.placeholder('email'))).prepare();
