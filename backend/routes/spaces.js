const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/", async (req, res) => {
  try {
    const allSpaces = await pool.query(
      "SELECT * FROM spaces ORDER BY created_at DESC"
    );
    res.json(allSpaces.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const newSpace = await pool.query(
      "INSERT INTO spaces (name) VALUES ($1) RETURNING *",
      [name]
    );
    res.json(newSpace.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updateSpace = await pool.query(
      "UPDATE spaces SET name = $1 WHERE id = $2",
      [name, id]
    );
    res.json({ message: "Space Updated!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteSpace = await pool.query("DELETE FROM spaces WHERE id = $1", [
      id,
    ]);
    res.json({ message: "Space was deleted!" });
  } catch (error) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
