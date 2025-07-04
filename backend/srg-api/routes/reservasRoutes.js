const express = require("express");
const router = express.Router();
const {
  getReservas,
  createReserva,
  updateReserva,
  deleteReserva
} = require("../controllers/reservasController");

router.get("/", getReservas);
router.post("/", createReserva);
router.put("/:id", updateReserva);
router.delete("/:id", deleteReserva);

module.exports = router;
