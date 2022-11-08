import { Request, Response } from "express";
import { task } from "../protocols/task";
import * as taskRepositories from "../repositories/task.repository.js";

export async function getTasks(req: Request, res: Response) {
  try {
    const result = await taskRepositories.getTasks();
    res.status(200).send(result.rows);
  } catch (error) {
    return res.sendStatus(500);
  }
}

export function updateTask(req: Request, res: Response) {
  try {
  } catch (error) {
    return res.sendStatus(500);
  }
}

export function countTasks(req: Request, res: Response) {
  try {
  } catch (error) {
    return res.sendStatus(500);
  }
}
