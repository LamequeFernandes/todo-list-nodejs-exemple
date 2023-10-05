import { UsuarioPostType, UsuarioPutType } from "../schemas/usuario.schema";
import { prisma } from "../services/prisma";
import { hash } from "bcryptjs";

export async function getAllUsuarios() {
  try {
    const usuarios = await prisma.usuario.findMany();
    return usuarios;
  } catch (error: any) {
    throw error;
  }
}

export async function getUsuarioById(id: number) {
  try {
    const usuario = await prisma.usuario.findUnique({
      where: {
        id_usuario: id,
      },
    });
    return usuario;
  } catch (error: any) {
    throw error;
  }
}

export async function createUsuario(usuario: UsuarioPostType): Promise<any> {
  try {
    const usuarioIgual = await prisma.usuario.findFirst({
      where: {
        email: usuario.email,
      },
    });

    if (usuarioIgual) {
      throw new String("Usuario ja cadatrado!");
    }

    const hashPassword = await hash(usuario.senha, 8);
    await prisma.usuario.create({
      data: {
        nome: usuario.nome,
        admin: usuario.admin,
        email: usuario.email,
        id_usuario: usuario.id_usuario,
        senha: hashPassword,
      },
    });

    return {
      msg: `Usuario ${usuario.id_usuario} criado com sucesso!`,
    };
  } catch (error: any) {
    throw error;
  }
}

export async function alterUsuario(id: number, usuario: UsuarioPutType) {
  try {
    await prisma.usuario.update({
      where: {
        id_usuario: id,
      },
      data: usuario,
    });

    return await prisma.usuario.findUnique({
      where: {
        id_usuario: id,
      },
    });
  } catch (error: any) {
    throw error;
  }
}

export async function removeUsuario(id: number) {
  try {
    await prisma.usuario.delete({
      where: {
        id_usuario: id,
      },
    });
    return {
      msg: `Usuario ${id} deletado com sucesso!!`,
    };
  } catch (error: any) {
    throw error;
  }
}
