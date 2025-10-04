const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/by-task/:task_id", async (req, res) => {
  try {
    const { task_id } = req.params;
    const getSubtasks = await pool.query(
      "SELECT * FROM subtasks WHERE task_id = $1 ORDER BY created_at DESC",
      [task_id]
    );
    res.json(getSubtasks.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, task_id } = req.body;
    const newSubtask = await pool.query(
      "INSERT INTO subtasks (title, task_id) VALUES ($1, $2) RETURNING *",
      [title, task_id]
    );
    res
      .status(201)
      .json({ message: "New Subtask created", subtask: newSubtask.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;
    const updateSubtask = await pool.query(
      "UPDATE subtasks SET title = COALESCE($1, title), completed = COALESCE($2, completed) WHERE id = $3 RETURNING *",
      [title, completed, id]
    );
    res.json({
      message: "Subtask was updated!",
      subtask: updateSubtask.rows[0],
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteSubtask = await pool.query(
      "DELETE FROM subtasks WHERE id = $1",
      [id]
    );
    res.json({ message: "Subtask was deleted!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
