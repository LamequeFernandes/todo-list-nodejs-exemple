import { Router } from 'express';
import { deleteUsuario, getUsuarios, loginUsuario, postUsuario, putUsuario } from '../controllers/usuario.controller';
import { authAdminMiddlware, authMiddlware } from '../middlewares/auth';

const router = Router();

router.get("/", authAdminMiddlware, getUsuarios);
router.post("/register", postUsuario);
router.post("/login", loginUsuario);
router.put("/", authMiddlware, putUsuario);
router.delete("/", authMiddlware, deleteUsuario);

export default router;
