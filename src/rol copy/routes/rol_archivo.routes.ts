import { Router } from "express";
import {
  uploadRolArchivo,
  descargarArchivo,
} from "../controllers/rol_archivo.controllers";
import multer from "multer";

const upload = multer({
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB, puedes ajustar el tamaño
});

const router = Router();

router.post("/upload", upload.single("file"), uploadRolArchivo);
router.get("/download/:id", descargarArchivo);

export default router;
