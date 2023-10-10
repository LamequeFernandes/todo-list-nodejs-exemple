import { Router } from "express";
import routerUsuario  from "./usuario.routes";
import routerTarefa  from "./tarefa.routes";

export const router = Router();

router.use("/usuario", routerUsuario);
router.use("/tarefa", routerTarefa);
