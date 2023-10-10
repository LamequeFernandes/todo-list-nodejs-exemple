import { Router } from 'express';
import { authMiddlware } from '../middlewares/auth';
import { getAllTasks, getTask, postTask } from '../controllers/tarefa.controller';

const router = Router();

router.post("/", authMiddlware, postTask);
router.get("/", authMiddlware, getAllTasks);
router.get("/:id", authMiddlware, getTask);

export default router;
