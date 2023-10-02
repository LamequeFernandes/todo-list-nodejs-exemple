import { Router } from "express";
import routerUsuario  from "./usuario.routes";

export const router = Router();

router.use("/usuario", routerUsuario);
