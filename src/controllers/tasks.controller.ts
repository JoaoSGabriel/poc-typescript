import { Request, Response } from "express";
import tasksService from "../services/task.service.js";

export async function getTasks(req: Request, res: Response) {
  try {
    const result = await tasksService.getAllTasksForEveryone();
    res.status(200).send(result);
  } catch (error) {
    return res.sendStatus(500);
  }
}

export async function updateTask(req: Request, res: Response) {
  const { taskId } = req.query;
  try {
    await tasksService.putTaskAsDone(Number(taskId));
    res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
}

export async function countTasks(req: Request, res: Response) {
  const userId = req.query?.userId;
  try {
    const result = await tasksService.getTasksByUser(Number(userId));
    res.status(200).send(result);
  } catch (error) {
    return res.sendStatus(500);
  }
}

export async function createTask(req: Request, res: Response) {
  try {
    res.sendStatus(201);
  } catch (error) {
    return res.sendStatus(500);
  }
}

export async function resetToDefault(req: Request, res: Response) {
  try {
    await tasksService.resetTasks();
    res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
}
