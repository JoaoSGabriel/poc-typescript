import { task } from "../protocols.js";
import * as taskRepositories from "../repositories/task.repository.js";

async function getAllTasksForEveryone() {
  const result = await taskRepositories.getTasks();
  return result;
}

async function putTaskAsDone(taskId: number) {
  return await taskRepositories.checkTaskAsDone(taskId);
}

async function getTasksByUser(userId: number) {
  const result = await taskRepositories.getMyIncompleteTasks(userId);
  return result;
}

async function createNewTask(
  description: string,
  userId: number
): Promise<void> {
  return await taskRepositories.newTask(description, userId);
}

async function deleteOneTask(taskId: number) {
  return await taskRepositories.deleteThisTask(taskId);
}

async function resetTasks() {
  return await taskRepositories.markAllAsIncomplete();
}

const tasksService = {
  getAllTasksForEveryone,
  getTasksByUser,
  putTaskAsDone,
  resetTasks,
  createNewTask,
  deleteOneTask,
};

export default tasksService;
