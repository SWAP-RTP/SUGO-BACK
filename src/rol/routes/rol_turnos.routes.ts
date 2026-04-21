import { Router } from "express";
import { getTurnosRol } from "../controllers/rol_turnos.controllers";

const router = Router();

router.get("/rol_turnos", getTurnosRol);
export default router;
