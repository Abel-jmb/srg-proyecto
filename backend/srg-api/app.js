require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const reservasRouter = require('./routes/reservasRoutes.js');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/reservas', reservasRouter);

// Futuro: conexión a MongoDB
// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("Conectado a MongoDB"))
//   .catch(err => console.error("Error en MongoDB", err));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
