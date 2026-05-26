import { Router } from "express";
import { rutasController, rutasCCController } from "../controllers/rutas.controllers";
import { verifyToken } from "../middlewares/verifyToken";

const router = Router();
router.get("/rutas", verifyToken, rutasController);
router.get("/rutas/cc/:rutaNombre", verifyToken, rutasCCController);
export default router;
