import express from "express";
import cors from "cors";
import moduloRoutes from "./routes/modulo.routes";
import motivosRoutes from "./routes/motivos.routes";
import pvEstadosRoutes from "./routes/pv_estados.routes";
import modalidadRoutes from "./routes/modalidad.routes";
import rutasRoutes from "./routes/rutas.routes";
import uploadRolArchivoRoutes from "../rol/routes/rol_archivo.routes";
import periodosRoutes from "../rol/routes/rol_periodos.routes";
import rolRutasRoutes from "../rol/routes/rol_rutas.routes";
import turnosRoutes from "../rol/routes/rol_turnos.routes";
import turnoDetalleRoutes from "../rol/routes/rol_turno_detalle.routes";

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
app.use("/api", uploadRolArchivoRoutes);
app.use("/api", periodosRoutes);
app.use("/api", rolRutasRoutes);
app.use("/api", turnosRoutes);
app.use("/api", turnoDetalleRoutes);
export default app;
