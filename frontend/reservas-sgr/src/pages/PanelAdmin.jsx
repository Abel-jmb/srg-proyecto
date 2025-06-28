import ReservaCard from "../components/ReservaCard";

export default function PanelAdmin() {
  const reservas = [
    { nombre: "Laura Jiménez", fecha: "2025-05-20", hora: "19:00", personas: 2, mesa: "2" },
    { nombre: "Carlos Pérez", fecha: "2025-05-21", hora: "20:00", personas: 4, mesa: "1" },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold text-black-700 mb-6 text-center">Reservas Activas</h2>
      {reservas.map((r, i) => (
        <ReservaCard key={i} {...r} mostrarAcciones />
      ))}
    </section>
  );
}
