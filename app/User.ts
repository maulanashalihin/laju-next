import DB from "../services/DB";
import { generateUUID } from "../services/helper";
import { all_users } from "../services/query";
import { users } from "../services/schema";

export function ListUser(request, response) {
   const users = all_users.all({
      email: "maulanashalihin@gmail.com",
   });
   response.json(users);
}

export async function AddUser(request,response)
{
    await DB.insert(users).values({
        id: generateUUID(),
        name: "Abdullah",
        email: "maulanashalihin@gmail.com",
     });
  
     response.send("OK");
}