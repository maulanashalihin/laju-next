import DB from "../services/DB";
import { generateUUID } from "../services/helper";
import { users } from "../services/schema";

import { eq, sql } from "drizzle-orm";

const all_users = DB.select()
   .from(users) 
   .prepare();

const user_by_email = DB.select()
   .from(users)
   .where(eq(users.email, sql.placeholder("email")))
   .prepare();

export function ListUser(request, response) {
   const users = all_users.all();
   response.json(users);
}

export function ShowUserByEmail(request, response) {

   const email = request.params.email;

   const users = user_by_email.all({
      email: email,
   });

   response.json(users);
}

export async function AddUser(request, response) {
   await DB.insert(users).values({
      id: generateUUID(),
      name: "Abdullah",
      email: "maulanashalihin@gmail.com",
   });

   response.send("OK");
}
