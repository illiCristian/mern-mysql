import express from "express";
import { PORT } from "./config/config.js";
import indexRoutes from "./routes/index.routes.js";
import tasksRoutes from "./routes/task.routes.js";

const app = express();

app.use(indexRoutes);
app.use(tasksRoutes);

app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});
