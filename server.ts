import HyperExpress from "hyper-express";  
import { AddUser, ListUser } from "./app/User";

const route = new HyperExpress.Server();

const port = 4000;

// Create GET route to serve 'Hello World'
route.get("/", ListUser);

route.post("/user", AddUser);

route
   .listen(port)
   .then((socket) =>
      console.log("Webserver started on  http://localhost:" + port)
   )
   .catch((error) => console.log("Failed to start webserver on port " + port));
