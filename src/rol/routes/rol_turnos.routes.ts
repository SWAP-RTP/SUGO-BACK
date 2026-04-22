import { Router } from "express";
import { getTurnosRol } from "../controllers/rol_turnos.controllers";
import { postTurnosRol } from "../controllers/rol_turnos.controllers";

const router = Router();

router.get("/rol_turnos", getTurnosRol);
router.post("/rol_turnos", postTurnosRol);
export default router;
