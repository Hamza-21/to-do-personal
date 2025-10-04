const express = require("express");
const app = express();
const spacesRoute = require("./routes/spaces");
const port = 3000;

//Middleware
app.use(express.json());

//Routes
app.use("/spaces", spacesRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
