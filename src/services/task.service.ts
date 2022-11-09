import { task } from "../protocols.js";
import * as taskRepositories from "../repositories/task.repository.js";

async function getAllTasksForEveryone(): Promise<task[]> {
  const result = await taskRepositories.getTasks();
  return result.rows;
}

async function putTaskAsDone(taskId: number): Promise<void> {
  return await taskRepositories.checkTaskAsDone(taskId);
}

async function getTasksByUser(userId: number): Promise<task[]> {
  const result = await taskRepositories.getMyTasks(userId);
  return result.rows;
}

async function resetTasks(): Promise<void> {
  return await taskRepositories.markAllAsIncomplete();
}

const tasksService = {
  getAllTasksForEveryone,
  getTasksByUser,
  putTaskAsDone,
  resetTasks,
};

export default tasksService;
