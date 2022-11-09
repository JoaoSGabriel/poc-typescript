import * as taskRepositories from "../repositories/task.repository.js";

async function getAllTasksForEveryone() {
  const result = await taskRepositories.getTasks();
  return result.rows;
}

const tasksService = {
  getAllTasksForEveryone,
};

export default tasksService;
