import { Link } from "react-router-dom";
import logo from "../assets/Monarchy.png";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-950 to-black flex items-center justify-center text-center px-6">
      <div>
        <img
          src={logo}
          alt="Monarchy Esports Logo"
          className="w-56 md:w-72 mx-auto mb-8 drop-shadow-[0_0_25px_rgba(59,130,246,0.8)]"
        />

        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-extrabold">
            MONARCHY
            <span className="text-blue-500"> ESPORTS</span>
          </h1>

          <p className="mt-6 text-xl text-gray-300">
            Founded by gamers, for gamers. Building Sri Lanka&apos;s competitive
             community.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              to="/tournaments"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-60"
            >
              View Tournament
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-400/30 bg-white/5 px-8 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}