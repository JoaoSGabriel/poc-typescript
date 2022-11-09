import { Router } from "express";
import {
  countTasks,
  getTasks,
  resetToDefault,
  updateTask,
} from "../controllers/tasks.controller.js";

const task = Router();

task.get("/tasks", getTasks);
task.put("/tasks", updateTask);
task.get("/tasksCount", countTasks);
task.post("/tasks", resetToDefault);

export { task };
