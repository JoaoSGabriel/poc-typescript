import { connection } from "../database/db.js";
import { myTasks, allTasks } from "../protocols.js";

export async function getTasks(): Promise<allTasks> {
  const allRepublicTasks = await connection.query(
    "SELECT residents.name, tasks.description, tasks.completed FROM residents JOIN tasks ON tasks.responsible = residents.id;"
  );

  return allRepublicTasks.rows;
}

export async function checkTaskAsDone(taskId: number): Promise<void> {
  return await connection.query(
    "UPDATE tasks SET completed = 'true' WHERE id = $1",
    [taskId]
  );
}

export async function getMyIncompleteTasks(userId: number): Promise<myTasks> {
  const tasks = await connection.query(
    `SELECT residents.name, COUNT(tasks.id) AS "tasksToDo" FROM residents JOIN tasks ON tasks.responsible = residents.id WHERE residents.id = $1 AND tasks.completed = 'false' GROUP BY residents.name;`,
    [userId]
  );
  return tasks.rows[0];
}

export async function newTask(
  description: string,
  userId: number
): Promise<void> {
  return await connection.query(
    `INSERT INTO tasks (description, responsible) VALUES($1, $2)`,
    [description, userId]
  );
}

export async function deleteThisTask(taskId: number): Promise<void> {
  return await connection.query(`DELETE FROM tasks WHERE id = $1`, [taskId]);
}

export async function markAllAsIncomplete(): Promise<void> {
  return await connection.query("UPDATE tasks SET completed = 'false'");
}
