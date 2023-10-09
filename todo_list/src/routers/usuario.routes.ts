import { Router } from 'express';
import { deleteUsuario, getUsuarios, loginUsuario, postUsuario, putUsuario } from '../controllers/usuario.controller';

const router = Router();

router.get("/", getUsuarios);
router.post("/register", postUsuario);
router.post("/login", loginUsuario);
router.put("/:id", putUsuario);
router.delete("/:id", deleteUsuario);

export default router;
