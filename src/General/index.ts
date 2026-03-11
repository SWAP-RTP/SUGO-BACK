import express from "express";
import cors from "cors";
import sequelize from "./DB/db";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/test-db", async (req, res) => {
  try {
    await sequelize.authenticate();
    res.json({ message: "¡Conexión a la base de datos exitosa!" });
  } catch (error) {
    res.status(500).json({ error: "Error de conexión", details: error });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
