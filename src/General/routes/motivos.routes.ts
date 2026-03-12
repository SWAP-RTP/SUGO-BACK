import { Router } from "express";
import { motivosController } from "../controllers/motivos.controllers";

const router = Router();
router.get("/motivos", motivosController);

export default router;
