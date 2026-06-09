import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <p className="text-blue-500 font-semibold tracking-[0.4em] uppercase mb-4">
          404
        </p>

        <h1 className="text-4xl md:text-6xl font-black mb-4">
          Page not found
        </h1>

        <p className="text-gray-400 mb-8">
          The page you are looking for does not exist or has moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-60"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}