import { Router } from "express";
import {
  obtenerCabeceraRol,
  crearCabeceraRolController,
} from "../controllers/rol_cabecera.controllers";

const router = Router();

router.get("/rol_cabecera", obtenerCabeceraRol);
router.post("/rol_cabecera_post", crearCabeceraRolController);

export default router;
