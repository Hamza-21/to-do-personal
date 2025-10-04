require("dotenv").config();

const express = require("express");
const app = express();
const spacesRoute = require("./routes/spaces");
const sectionsRoute = require("./routes/sections");
const tasksRoute = require("./routes/tasks");
const subtasksRoute = require("./routes/subtasks");
const port = 3000;

//Middleware
app.use(express.json());

//Routes
app.use("/spaces", spacesRoute);
app.use("/sections", sectionsRoute);
app.use("/tasks", tasksRoute);
app.use("/subtasks", subtasksRoute);

app.listen(port, () => {
  console.log(`To-Do List listening on port ${port}`);
});
