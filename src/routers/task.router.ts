import { Router } from "express";
import {
  countTasks,
  getTasks,
  updateTask,
} from "../controllers/tasks.controller.js";

const task = Router();

task.get("/tasks", getTasks);
task.put("/tasks", updateTask);
task.get("/count/tasks", countTasks);

export { task };
