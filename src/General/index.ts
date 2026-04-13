import express from "express";
import sequelize from "./DB/db";
import app from "./app";
import "../rol/index"; // ← AGREGAR ESTA LÍNEA para importar el rol

const PORT = process.env.PORT || 3000;

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
