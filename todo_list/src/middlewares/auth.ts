import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { prisma } from '../services/prisma';

type TokenPayload = {
  id: number;
  iat: number;
  exp: number;
}

export async function authMiddlware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(403).json({
      message: "Unauthorized"
    });
  }

  const [_, token] = authorization.split(" ");

  try {
    const decoded = verify(token, "bba6707fdaa796052e8bfc1d9dcd1170c769c2c300079baaa78cd1a9d805ee63");
    const { id } = decoded as TokenPayload;

    const usuario = await prisma.usuario.findUnique({
      where: {
        id_usuario: id
      }
    });

    if (!usuario) {
      return res.status(403).json({
        message: "Unauthorized"
      });
    }

    req.userId = id;
    next();
  } catch(e: any) {
    return res.status(500).json({
        message: String(e)
    });
  }
}

export async function authAdminMiddlware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(403).json({
      message: "Unauthorized"
    });
  }

  const [_, token] = authorization.split(" ");

  try {
    const decoded = verify(token, "bba6707fdaa796052e8bfc1d9dcd1170c769c2c300079baaa78cd1a9d805ee63");
    const { id } = decoded as TokenPayload;

    const usuario = await prisma.usuario.findUnique({
      where: {
        id_usuario: id,
        admin: true
      }
    });

    if (!usuario) {
      return res.status(403).json({
        message: "Unauthorized"
      });
    }

    req.userId = id;
    next();
  } catch(e: any) {
    return res.status(500).json({
        message: String(e)
    });
  }
}
