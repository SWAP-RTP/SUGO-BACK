import { Router } from "express";
import { motivosController, motivosControllerRecepcion } from "../controllers/motivos.controllers";

const router = Router();
router.get("/motivos", motivosController);
router.get("/motivosRecepcion", motivosControllerRecepcion);

export default router;

