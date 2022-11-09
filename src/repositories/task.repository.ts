import { connection } from "../database/db.js";

export async function getTasks() {
  return await connection.query(
    "SELECT residents.name, tasks.description, tasks.completed FROM residents JOIN tasks ON tasks.responsible = residents.id;"
  );
}

export async function checkTaskAsDone(taskId: number) {
  return await connection.query(
    "UPDATE tasks SET completed = 'true' WHERE id = $1",
    [taskId]
  );
}

export async function getMyTasks(userId: number) {
  return await connection.query(
    `SELECT residents.name, COUNT(tasks.id) AS "tasksToDo" FROM residents JOIN tasks ON tasks.responsible = residents.id WHERE residents.id = $1 AND tasks.completed = 'false' GROUP BY residents.name;`,
    [userId]
  );
}

export async function markAllAsIncomplete() {
  return await connection.query("UPDATE tasks SET completed = 'false'");
}
