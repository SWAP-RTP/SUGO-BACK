import { Router } from "express";
import { getPv_estados } from "../controllers/pv_estados.controllers";

const router = Router();
router.get("/pv_estados", getPv_estados);

export default router;
