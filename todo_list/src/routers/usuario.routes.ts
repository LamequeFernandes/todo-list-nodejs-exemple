import { Router } from 'express';
import { teste, teste2 } from '../controllers/usuario.controller';

const router = Router();

router.get("/", teste);
router.get("/teste", teste2);

export default router;
