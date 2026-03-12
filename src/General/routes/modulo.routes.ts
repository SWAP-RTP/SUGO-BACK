import { Router } from "express";
import { modulosController } from "../controllers/modulo.controllers";

const router = Router();
router.get("/modulos", modulosController);

export default router;
