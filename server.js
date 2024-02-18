// 1. Import Express
import express from "express";

// 2. Create a Server
const server = express();

// 3. Defualt request handler
server.get("/", (req, res) => {
  res.send("Welcome to Ecommerce APIs");
});

// 4. Specify Port.
const PORT = 3200;
server.listen(PORT);
console.log("Server is running at",PORT);
