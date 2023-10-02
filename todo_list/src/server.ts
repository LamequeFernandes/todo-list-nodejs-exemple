import express from 'express';
import { Router, Request, Response } from 'express';
// import { prisma } from './services/prisma';

const app = express();
const route = Router();

app.use(express.json());

route.get("/", (req: Request, res: Response) => {
    res.json({msg: "Testando primeiro endpoint"});
})

route.get("/ola", (req: Request, res: Response) => {
    res.json({msg: "ola mundo"});
})

app.use(route);

app.listen(3001, async() => {
    console.log("Ola mundo!!!");

    // const usuarios = await prisma.usuario.findMany();
    // const query = `SELECT * FROM usuario where id_usuario = 1`;
    // const usurio = await prisma.$queryRaw(query);

    // console.log(usurio);
});
