import express from "express";
import cors from "cors";
import moduloRoutes from "./routes/modulo.routes";
import motivosRoutes from "./routes/motivos.routes";
import pvEstadosRoutes from "./routes/pv_estados.routes";
import modalidadRoutes from "./routes/modalidad.routes";
import rutasRoutes from "./routes/rutas.routes";
import rolCabeceraRoutes from "../rol/routes/rol_cabecera.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", moduloRoutes);
app.use("/api", motivosRoutes);
app.use("/api", pvEstadosRoutes);
app.use("/api", modalidadRoutes);
app.use("/api", rutasRoutes);
// pendiente por revisar
app.use("/api", rutasRoutes);

// ROL
app.use("/api", rolCabeceraRoutes);

export default app;
