import { Router } from "express";
import { get_detalle_lv, get_detalle_sd, get_detalle_dom, post_detalle_lv, post_detalle_sd, post_detalle_dom } from "../controllers/rol_turno_detalle.controllers";


const router = Router();


// !!** rutas para el get **!!

// rutas para el detalle de lunes a viernes
router.get("/detalle_lv", get_detalle_lv);

// rutas para el detalle de sabado
router.get("/detalle_sd", get_detalle_sd);

// rutas para el detalle de domingo
router.get("/detalle_dom", get_detalle_dom);



// !!** rutas para el post **!!

// rutas para el detalle de lunes a viernes
router.post("/detalle_lv", post_detalle_lv);

// rutas para el detalle de sabado
router.post("/detalle_sd", post_detalle_sd);

// rutas para el detalle de domingo
router.post("/detalle_dom", post_detalle_dom);

export default router;
 