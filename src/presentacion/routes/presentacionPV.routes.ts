import Router from "express";
import {
  HoraPresentacionController,
  HoraPresentacionControllerP,
} from "../controllers/presentacionPV.controllers";

const router = Router();

// GET
router.get("/hora", HoraPresentacionController);

// POST
router.post("/horaPost", HoraPresentacionControllerP);

export default router;
