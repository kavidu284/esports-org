import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Monarchy.png";

export default function Navbar() {
  const navClass = ({ isActive }) =>
    `relative font-medium transition duration-300 ${
      isActive
        ? "text-blue-500"
        : "text-white hover:text-blue-400"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-24 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-4">

          <img
            src={logo}
            alt="Monarchy Esports"
            className="w-14 h-14 object-contain"
          />
          </Link>
          <Link to="/">
          <div>
            <h1 className="text-3xl font-black">
              <span className="text-blue-500">
                MONARCHY
              </span>
            </h1>

            <p className="text-sm tracking-[0.4em] text-white">
              ESPORTS
            </p>
          </div>

        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">

          <NavLink
           to="/" 
           className={navClass}
           >
            Home
          </NavLink>
          
          <NavLink
            to="/about"
            className={navClass}
>
            About
          </NavLink>

          <NavLink
            to="/tournaments"
            className={navClass}
          >
            Tournaments
          </NavLink>

          <NavLink
            to="/gallery"
            className={navClass}
          >
            Gallery
          </NavLink>

          <NavLink
            to="/news"
            className={navClass}
          >
            News
          </NavLink>


          


        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-60"
        >
          Get in Touch
        </Link>

      </div>
    </nav>
  );
}