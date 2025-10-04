const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/by-section/:section_id", async (req, res) => {
  try {
    const { section_id } = req.params;
    const getTasks = await pool.query(
      "SELECT * FROM tasks WHERE section_id = $1 ORDER BY created_at DESC",
      [section_id]
    );
    res.json(getTasks.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, section_id, description } = req.body;
    const newTask = await pool.query(
      "INSERT INTO tasks (title, section_id, description) VALUES ($1, $2, $3) RETURNING *",
      [title, section_id, description]
    );
    res
      .status(201)
      .json({ message: "New task created", task: newTask.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const updateTask = await pool.query(
      "UPDATE tasks SET title = COALESCE($1, title), description = COALESCE($2, description), completed = COALESCE($3, completed) WHERE id = $4 RETURNING *",
      [title, description, completed, id]
    );
    res.json({ message: "Task was updated!", task: updateTask.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTask = await pool.query("DELETE FROM tasks WHERE id = $1", [
      id,
    ]);
    res.json({ message: "Task was deleted!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
