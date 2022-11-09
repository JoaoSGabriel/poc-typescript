import { task } from "../protocols.js";
import * as taskRepositories from "../repositories/task.repository.js";

async function getAllTasksForEveryone() {
  const result = await taskRepositories.getTasks();
  return result.rows;
}

async function getTasksByUser(userId: number): Promise<task[]> {
  const result = await taskRepositories.getMyTasks(userId);
  return result.rows;
}

const tasksService = {
  getAllTasksForEveryone,
  getTasksByUser,
};

export default tasksService;
