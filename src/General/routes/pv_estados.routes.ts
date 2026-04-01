import { Router } from "express";
import {
  getPv_estados,
  postPv_estado,
} from "../controllers/pv_estados.controllers";

const router = Router();
router.get("/pv_estados", getPv_estados);
router.post("/pv_estados", postPv_estado); 

export default router;
