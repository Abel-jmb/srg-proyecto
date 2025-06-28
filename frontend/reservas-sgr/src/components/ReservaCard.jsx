export default function ReservaCard({ nombre, fecha, hora, personas, mesa, mostrarAcciones }) {
  return (
    <div className="bg-white border rounded-lg shadow-md p-4 w-full max-w-md mx-auto my-4">
      <h2 className="text-xl font-semibold text-blue-600">{nombre}</h2>
      <p><span className="font-medium">Fecha:</span> {fecha}</p>
      <p><span className="font-medium">Hora:</span> {hora}</p>
      <p><span className="font-medium">Personas:</span> {personas}</p>
      <p><span className="font-medium">Mesa:</span> {mesa}</p>

      {mostrarAcciones && (
        <div className="flex gap-3 mt-4">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded cursor-pointer">
            Confirmar
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded cursor-pointer">
            Cancelar
          </button>
        </div>
      )}
    </div>
  );
}
