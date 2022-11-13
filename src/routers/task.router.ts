import { Router } from "express";
import {
  countTasks,
  createTask,
  deleteTask,
  getTasks,
  resetToDefault,
  updateTask,
} from "../controllers/tasks.controller.js";

const task = Router();

task.get("/tasks", getTasks);
task.put("/tasks", updateTask);
task.get("/tasksCount", countTasks);
task.post("/tasks", resetToDefault);
task.post("/taskCreate", createTask);
task.delete("/tasks", deleteTask);

export { task };
