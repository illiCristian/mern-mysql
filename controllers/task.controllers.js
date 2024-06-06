import { pool } from "../db/db.js";

export default class TaskController {
  async getTask(req, res) {
    try {
      const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
        req.params.id,
      ]);
      if (result.length === 0) {
        return res.status(404).json({ message: "Task not found" });
      }
      console.log(result[0]);
      res.json(result[0]);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async getTasks(req, res) {
    try {
      const [result] = await pool.query(
        "SELECT * FROM tasks ORDER BY createAt ASC"
      );
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async createTask(req, res) {
    try {
      const { title, description } = req.body;
      const [result] = await pool.query(
        "INSERT INTO tasks (title, description) VALUES (?, ?)",
        [title, description]
      );
      res.json({
        message: result.insertId,
        title,
        description,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async updateTask(req, res) {
    try {
      const result = await pool.query("UPDATE tasks SET ? WHERE id = ?", [
        req.body,
        req.params.id,
      ]);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async deleteTask(req, res) {
    try {
      const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [
        req.params.id,
      ]);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.json({ message: "Task deleted" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}
