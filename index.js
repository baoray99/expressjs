const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello Ma Fren!"));
app.get("/users", (req, res) => res.send("Do ma may con cho !"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
