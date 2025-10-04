const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/by-space/:space_id", async (req, res) => {
  try {
    const { space_id } = req.params;
    const getSections = await pool.query(
      "SELECT * FROM sections WHERE space_id = $1 ORDER BY created_at DESC",
      [space_id]
    );
    res.json(getSections.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, space_id } = req.body;
    const newSection = await pool.query(
      "INSERT INTO sections (name, space_id) VALUES ($1, $2) RETURNING *",
      [name, space_id]
    );
    res
      .status(201)
      .json({ message: "New Section created", Sections: newSection.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updateSection = await pool.query(
      "UPDATE sections SET name = $1 WHERE id = $2",
      [name, id]
    );
    res.json({ message: "Section Updated!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteSection = await pool.query(
      "DELETE FROM sections WHERE id = $1",
      [id]
    );
    res.json({ message: "Section was deleted!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
