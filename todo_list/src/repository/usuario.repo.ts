import { prisma } from "../services/prisma";

export async function getAllUsuarios() {
    try {
        const usuarios = await prisma.usuario.findMany();
        return usuarios;
    } catch(error: any) {
        throw error;
    }
}

export async function getUsuarioById(id: number) {
    try {
        const usuario = await prisma.usuario.findUnique({
            where: {
                id_usuario: id
            }
        });
        return usuario;
    } catch(error: any) {
        throw error;
    }
}

