import { StatusTask, TaskPostType } from "../schemas/tarefa.schema";
import { prisma } from "../services/prisma";

export async function createTask(idUser: number, task: TaskPostType) {
  try {
    await prisma.tarefa.create({
      data: {
        id_usuario: idUser,
        ...task
      }
    });

    return {
      message: `Tarefa ${task.titulo}, criada com sucesso!`
    }
  } catch (error: any) {
    throw error;
  }
}

export async function getTasks(idUser: number, status?: StatusTask) {
  try{
    const tasks = await prisma.tarefa.findMany({
      where: {
        id_usuario: idUser,
        status: status
      },
      orderBy: {
        dt_criacao: { sort: 'asc' }
      }
    });

    return tasks;

  } catch (error: any) {
    throw error;
  }

}



export async function findTask(idUser: number, idTask: number) {
  try{
    const task = await prisma.tarefa.findFirst({
      where: {
        id_tarefa: idTask,
        id_usuario: idUser
      }
    });

    if (!task) {
      throw new String("Não foi encontrada nenhuma task com o id informado!");
    }
    return task;
  } catch (error: any) {
    throw error;
  }

}
