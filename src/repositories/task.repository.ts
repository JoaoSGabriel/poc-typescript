import { connection } from "../database/db.js";

export async function getTasks() {
  return await connection.query(
    "SELECT residents.name, tasks.description, tasks.completed FROM residents JOIN tasks ON tasks.responsible = residents.id;"
  );
}
