import { Response, Request } from "express";
import {
  alterUsuario,
  authUsuario,
  createUsuario,
  getAllUsuarios,
  removeUsuario,
} from "../repository/usuario.repo";
import { LoginSchema, UsuarioPostSchema, UsuarioPutSchema } from "../schemas/usuario.schema";

export async function loginUsuario(req: Request, res: Response) {
  try {

    const body = LoginSchema.safeParse(req.body);

    if (!body.success) {
      res.status(422).send(body.error);
      return;
    }

    const tokenJWT = await authUsuario(body.data.email, body.data.senha);
    res.status(200).json({token: tokenJWT})
  } catch (e: any) {
    res.status(400).json({msg: String(e)});
  }
}

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
    res.status(400).json({msg: String(error)});
  }
}

export async function putUsuario(req: Request, res: Response) {
  try {
    const camposAlterados = UsuarioPutSchema.safeParse(req.body);

    if (!camposAlterados.success) {
      res.status(422).send(camposAlterados.error);
      return;
    }

    const result = await alterUsuario(Number(req.userId!), camposAlterados.data);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json(JSON.parse(error));
  }
}

export async function deleteUsuario(req: Request, res: Response) {
  try {
    const result = await removeUsuario(Number(req.userId!));
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json(JSON.parse(error));
  }
}
