import { Router } from "express";
import { createTask, deleteTask, editTask, getTasks, toggleTask } from "../controller/Task.js";
const router = Router();

router.get('/', getTasks);
router.delete('/:id', deleteTask);
router.post('/', createTask);
router.put('/:id', editTask);
router.patch('/:id', toggleTask);
export default router;