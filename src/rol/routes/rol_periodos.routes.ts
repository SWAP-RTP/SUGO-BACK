import Router from "express";
import { periodosController } from "../controllers/rol_periodos.controllers";

const router = Router();

router.get("/periodos", periodosController);
export default router;
