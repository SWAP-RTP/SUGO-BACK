import Router from "express";
import {
  HoraPresentacionController,
  HoraPresentacionControllerP,
} from "../controllers/presentacionPV.controllers";
import { verifyToken } from "../../General/middlewares/verifyToken";

const router = Router();

// GET
router.get("/hora", HoraPresentacionController);

// POST
router.post("/horaPost", verifyToken, HoraPresentacionControllerP);

export default router;
