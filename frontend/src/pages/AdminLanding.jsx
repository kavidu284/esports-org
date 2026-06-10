import { Link } from "react-router-dom";
import logo from "../assets/Monarchy.png";

export default function AdminLanding() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="text-center max-w-3xl px-6">

        <img
          src= {logo}
          alt="Monarchy Esports"
          className="w-40 mx-auto mb-8"
        />

        <h1 className="text-6xl font-bold mb-6">
          Monarchy Esports
        </h1>

        <p className="text-gray-400 text-xl mb-10">
          Administration Portal
        </p>

        <Link
          to="/admin/login"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg"
        >
          Enter Admin Panel
        </Link>

      </div>

    </div>
  );
}