import { Router } from "express";
import { getRutasRol } from "../controllers/rol_rutas.controllers";
import { postRutasRol } from "../controllers/rol_rutas.controllers";

const router = Router();

router.get("/rol_rutas", getRutasRol);
router.post("/rol_rutas", postRutasRol);

export default router;
