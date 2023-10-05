import { Router } from 'express';
import { deleteUsuario, getUsuarios, postUsuario, putUsuario } from '../controllers/usuario.controller';

const router = Router();

router.get("/", getUsuarios);
router.post("/register", postUsuario);
router.put("/:id", putUsuario);
router.delete("/:id", deleteUsuario);

export default router;
