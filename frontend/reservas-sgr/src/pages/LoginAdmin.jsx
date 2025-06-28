import { useState } from "react";

export default function LoginAdmin() {
  const [user, setUser] = useState({ usuario: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logica mas adelante
    alert("Inicio de sesión simulado");
  };

  return (
    <section className="max-w-sm mx-auto bg-white p-6 rounded shadow-xl mt-20">
      <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Acceso Administrador</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="usuario"
          placeholder="Usuario"
          value={user.usuario}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={user.password}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
        >
          Iniciar Sesión
        </button>
      </form>
    </section>
  );
}
