import { connection } from "../database/db.js";

export async function getTasks() {
  return await connection.query(
    "SELECT residents.name, tasks.description, tasks.completed FROM residents JOIN tasks ON tasks.responsible = residents.id;"
  );
}

export async function getMyTasks(userId: number) {
  return await connection.query(
    `SELECT residents.name, COUNT(tasks.id) AS "tasksToDo" FROM residents JOIN tasks ON tasks.responsible = residents.id WHERE residents.id = $1 GROUP BY residents.name;`,
    [userId]
  );
}
