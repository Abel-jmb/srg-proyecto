import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Reservas() {
  const [form, setForm] = useState({
    nombre: "",
    fecha: "",
    hora: "",
    personas: "",
    mesa: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reserva enviada correctamente");
    navigate("/confirmacion");
    // Logica mas adelante
  };

  return (
    <section className="max-w-lg mx-auto bg-white p-6 rounded shadow-xl">
      <h2 className="text-2xl font-bold text-black mb-4 text-center">Reservar una Mesa</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={form.nombre}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="date"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="time"
          name="hora"
          value={form.hora}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="number"
          name="personas"
          placeholder="Número de personas"
          value={form.personas}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <select
          name="mesa"
          value={form.mesa}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        >
          <option value="">Selecciona una mesa</option>
          <option value="1">Mesa 1</option>
          <option value="2">Mesa 2</option>
          <option value="3">Mesa 3</option>
        </select>
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition"
        >
          Confirmar Reserva
        </button>
      </form>
    </section>
  );
}
