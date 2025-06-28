export default function Home() {
  return (
    <section className="text-center mt-20">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Bienvenido al Sistema de Gestión de Reservas
      </h1>
      <p className="text-gray-600 text-lg mb-6 max-w-xl mx-auto">
        Organiza tus reservas de manera rápida, sencilla y moderna. Accede como
        administrador o realiza una nueva reserva como cliente.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="/reservas"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition">
          Reservar Ahora
        </a>
        <a
          href="/login"
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded transition">
          Iniciar Sesión
        </a>

        <a
          href="/disponibilidad"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition">
          Ver Disponibilidad
        </a>
      </div>
    </section>
  );
}
