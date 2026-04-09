import { Router } from "express";
import {
  getPv_estados,
  postPv_estado,
  getPv_estados_Recepcion
} from "../controllers/pv_estados.controllers";

const router = Router();
router.get("/pv_estados", getPv_estados);
router.get("/pv_estados_Recepcion", getPv_estados_Recepcion);
router.post("/pv_estados", postPv_estado);

export default router;
