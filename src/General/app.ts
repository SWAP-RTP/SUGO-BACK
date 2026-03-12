import express from "express";
import cors from "cors";
import moduloRoutes from "./routes/modulo.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", moduloRoutes);

export default app;
