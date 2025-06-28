import { useState, useEffect } from "react";

export default function Disponibilidad() {
  // Logica mas adelante
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    // Mas adelante con datos reales
    const disponible = Math.floor(Math.random() * 101); // 0 a 100
    setPorcentaje(disponible);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Disponibilidad de Mesas</h1>

      <div className="w-full max-w-md bg-gray-200 rounded-full h-8 mb-4">
        <div
          className={`h-8 rounded-full ${
            porcentaje > 60
              ? "bg-green-500"
              : porcentaje > 30
              ? "bg-yellow-400"
              : "bg-red-500"
          }`}
          style={{ width: `${porcentaje}%` }}
        ></div>
      </div>

      <p className="text-lg text-gray-700 mb-6">{porcentaje}% de disponibilidad</p>

      <a
        href="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition"
      >
        Volver al Inicio
      </a>
    </section>
  );
}
