import { Router } from "express";
import { getModalidades } from "../controllers/modalidad.controllers";

const router = Router();

router.get("/modalidades", getModalidades);
export default router;
