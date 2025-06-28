const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "../data/reservas.json");

const getReservas = (req, res) => {
  if (!fs.existsSync(dataPath)) {
    return res.json([]);
  }

  const reservas = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  res.json(reservas);
};

const createReserva = (req, res) => {
  const { nombre, fecha, hora, personas, mesa } = req.body;

  if (!nombre || !fecha || !hora || !personas || !mesa) {
    return res.status(400).json({ error: "Todos los campos son obligatorios." });
  }

  if (typeof nombre !== "string" || nombre.trim().length < 3) {
    return res.status(400).json({ error: "El nombre debe tener al menos 3 caracteres." });
  }

  if (isNaN(personas) || personas <= 0) {
    return res.status(400).json({ error: "El número de personas debe ser válido." });
  }

  const nuevaReserva = {
    id: Date.now().toString(),
    nombre,
    fecha,
    hora,
    personas,
    mesa,
  };

  let reservas = [];
  if (fs.existsSync(dataPath)) {
    reservas = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  }

  reservas.push(nuevaReserva);
  fs.writeFileSync(dataPath, JSON.stringify(reservas, null, 2));

  res.status(201).json({ message: "Reserva creada con éxito.", reserva: nuevaReserva });
};

const updateReserva = (req, res) => {
  const { id } = req.params;
  const { nombre, fecha, hora, personas, mesa } = req.body;

  if (!fs.existsSync(dataPath)) {
    return res.status(404).json({ error: "No hay reservas registradas." });
  }

  let reservas = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  const index = reservas.findIndex((r) => r.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Reserva no encontrada." });
  }

  reservas[index] = {
    ...reservas[index],
    nombre,
    fecha,
    hora,
    personas,
    mesa,
  };

  fs.writeFileSync(dataPath, JSON.stringify(reservas, null, 2));
  res.json({ message: "Reserva actualizada correctamente.", reserva: reservas[index] });
};

const deleteReserva = (req, res) => {
  const { id } = req.params;

  if (!fs.existsSync(dataPath)) {
    return res.status(404).json({ error: "No hay reservas registradas." });
  }

  let reservas = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  const nuevaLista = reservas.filter((r) => r.id !== id);

  if (reservas.length === nuevaLista.length) {
    return res.status(404).json({ error: "Reserva no encontrada." });
  }

  fs.writeFileSync(dataPath, JSON.stringify(nuevaLista, null, 2));
  res.json({ message: "Reserva eliminada correctamente." });
};

module.exports = {
  getReservas,
  createReserva,
  updateReserva,
  deleteReserva,
};
