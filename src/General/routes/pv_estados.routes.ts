import { Router } from "express";
import {
  getPv_estados,
  postPv_estado,
  getPv_estados_Recepcion,
  deletePvEstado
} from "../controllers/pv_estados.controllers";

const router = Router();
router.get("/pv_estados", getPv_estados);
router.get("/pv_estados_Recepcion", getPv_estados_Recepcion);
router.post("/pv_estados", postPv_estado);
router.delete("/pv_estados/:id", deletePvEstado);

export default router;
