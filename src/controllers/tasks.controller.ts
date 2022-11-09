import { Request, Response } from "express";
import { task } from "../protocols.js";
import { getAllTasksForEveryone } from "../services/task.service.js";

export async function getTasks(req: Request, res: Response) {
  try {
    const result = await getAllTasksForEveryone();
    res.status(200).send(result);
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
