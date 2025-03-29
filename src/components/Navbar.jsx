import { Link } from "react-router-dom";
import { FaPaw } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-black">
      <div className="bg-[#7D1B1B] text-white flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaPaw className="text-white text-2xl" />
          <span className="text-xl font-semibold">PetSalud</span>
        </div>

        <div className="flex gap-6 items-center">
          {/* Links */}
          <div className="flex gap-6 text-sm">
            <Link to="/" className="hover:underline">
              Inicio
            </Link>
            <Link to="/services" className="hover:underline">
              Servicios
            </Link>
            <Link to="specialists" className="hover:underline">
              Especialistas
            </Link>
            <Link to="/contact" className="hover:underline">
              Contáctanos
            </Link>
          </div>

          {/* Botón Iniciar Sesión */}
          <Link to="/login">
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-500">
              Iniciar sesión
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
