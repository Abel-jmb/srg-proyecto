import { Link } from "react-router-dom";

export default function Confirmacion() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center bg-green-200">
      <h1 className="text-4xl font-bold text-green-600 mb-4">¡Reserva Confirmada!</h1>
      <p className="text-lg text-gray-700 mb-8">
        Gracias por reservar con nosotros. Te esperamos en el restaurante 
      </p>
      <Link
        to="/"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded transition"
      >
        Volver al Inicio
      </Link>
    </section>
  );
}