import * as taskRepositories from "../repositories/task.repository.js";

export async function getAllTasksForEveryone() {
  const result = await taskRepositories.getTasks();
  return result.rows;
}
