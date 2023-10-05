import { Response, Request } from "express";
import {
  alterUsuario,
  createUsuario,
  getAllUsuarios,
  removeUsuario,
} from "../repository/usuario.repo";
import { UsuarioPostSchema, UsuarioPutSchema } from "../schemas/usuario.schema";

export async function getUsuarios(req: Request, res: Response) {
  try {
    const usuarios = await getAllUsuarios();
    res.status(200).json(usuarios);
  } catch (e: any) {
    console.log(e);
    res.status(400).json(e);
  }
}

export async function postUsuario(req: Request, res: Response) {
  try {
    const body = UsuarioPostSchema.safeParse(req.body);

    if (!body.success) {
      res.status(422).send(body.error);
      return;
    }

    const result = await createUsuario(body.data);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json(JSON.parse(error));
  }
}

export async function putUsuario(req: Request, res: Response) {
  try {
    const idUsuario = req.params.id;
    const camposAlterados = UsuarioPutSchema.safeParse(req.body);

    if (!camposAlterados.success) {
      res.status(422).send(camposAlterados.error);
      return;
    }

    const result = await alterUsuario(Number(idUsuario), camposAlterados.data);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json(JSON.parse(error));
  }
}

export async function deleteUsuario(req: Request, res: Response) {
  try {
    const idUsuario = req.params.id;

    const result = await removeUsuario(Number(idUsuario));
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json(JSON.parse(error));
  }
}
