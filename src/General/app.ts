import express from "express";
import cors from "cors";
import moduloRoutes from "./routes/modulo.routes";
import motivosRoutes from "./routes/motivos.routes";
import pvEstadosRoutes from "./routes/pv_estados.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", moduloRoutes);
app.use("/api", motivosRoutes);
app.use("/api", pvEstadosRoutes);

export default app;
