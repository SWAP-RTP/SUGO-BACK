import { Router } from "express";
import { rutasController } from "../controllers/rutas.controllers";

const router = Router();
router.get("/rutas", rutasController);
export default router;
