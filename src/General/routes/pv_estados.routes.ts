import { Router } from "express";
import {
  getPv_estados,
  postPv_estado,
  getPv_estados_Recepcion,
  deletePvEstado,
  verificarEconomico,
  getPv_estados_Activos
} from "../controllers/pv_estados.controllers";

const router = Router();
router.get("/pv_estados/verificar/:economico", verificarEconomico)
router.get("/pv_estados", getPv_estados);
router.get("/pv_estados_Recepcion", getPv_estados_Recepcion);
router.get("/pv_estados_activos", getPv_estados_Activos);
router.post("/pv_estados", postPv_estado);
router.delete("/pv_estados/:id", deletePvEstado);

export default router;
