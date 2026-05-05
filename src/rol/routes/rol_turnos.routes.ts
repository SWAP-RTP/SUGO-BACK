import { Router } from "express";
import { getTurnosRol } from "../controllers/rol_turnos.controllers";
import { postTurnosRol, postTurnoEditado, postCierreDia } from "../controllers/rol_turnos.controllers";

const router = Router();

router.get("/rol_turnos", getTurnosRol);
router.post("/rol_turnos", postTurnosRol);
router.post("/rol_turnos_edit", postTurnoEditado);
router.post("/cierre_dia", postCierreDia);

export default router;
