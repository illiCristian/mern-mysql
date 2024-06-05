export default class TaskController {
  async getTask(req, res) {
    res.json({ message: "GET /tasks/:id" });
  }

  async getTasks(req, res) {
    res.json({ message: "GET /tasks" });
  }

  async createTask(req, res) {
    res.json({ message: "POST /tasks" });
  }

  async updateTask(req, res) {
    res.json({ message: "PUT /tasks/:id" });
  }

  async deleteTask(req, res) {
    res.json({ message: "DELETE /tasks/:id" });
  }
}
