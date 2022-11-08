import { Request, Response } from "express";

export const controller = (req: Request, res: Response): object => {
  try {
  } catch (error) {
    return res.sendStatus(500);
  }
};
