import { Response, Request } from "express";
import { StatusTask, TaskPostSchema } from "../schemas/tarefa.schema";
import { createTask, findTask, getTasks } from "../repository/tarefa.repo";

export async function postTask(req: Request, res: Response) {
  try{
    const body = TaskPostSchema.safeParse(req.body);

    if (!body.success) {
      return res.status(422).send(body.error);
    }

    const result = await createTask(req.userId, body.data);
    res.status(201).json(result);
  } catch (e: any) {
    res.status(400).json({msg: String(e)});
  }
}

export async function getAllTasks(req: Request, res: Response) {
  try {
    const { status } = req.query;

    const tasks = await getTasks(req.userId, status as StatusTask | undefined);
    res.status(200).json(tasks);
  } catch (e: any) {
    res.status(400).json({msg: String(e)});
  }
}

export async function getTask(req: Request, res: Response) {
  try {
    const tasks = await findTask(req.userId, Number(req.params.id));
    res.status(200).json(tasks);
  } catch (e: any) {
    res.status(400).json({msg: String(e)});
  }
}
