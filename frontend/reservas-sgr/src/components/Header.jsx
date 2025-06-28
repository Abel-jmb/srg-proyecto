import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">SGR</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Inicio</Link>
          <Link to="/reservas" className="hover:underline">Reservar</Link>
          <Link to="/login" className="hover:underline">Admin</Link>
        </nav>
      </div>
    </header>
    </>
    
  );
}
