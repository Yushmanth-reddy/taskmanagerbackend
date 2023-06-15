import express from "express";
import {
  AllTasks,
  CreateTask,
  deleteTask,
  readTask,
  updateTask,
} from "../controllers/tasks.js";

const router = express.Router();

router.post("/createTask", CreateTask);
router.get("/allTask", AllTasks);
router.get("/readTask/:id", readTask);
router.put("/updateTask/:id", updateTask);
router.delete("/deleteTask/:id", deleteTask);

export default router;
