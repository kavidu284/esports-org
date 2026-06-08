import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-950 to-black flex items-center justify-center text-center px-6">

      <div className="max-w-4xl">

        <h1 className="text-6xl md:text-8xl font-extrabold">
          MONARCHY
          <span className="text-blue-500"> ESPORTS</span>
        </h1>

        <p className="mt-6 text-xl text-gray-300">
          Founded by gamers, for gamers.
          Building Sri Lanka's competitive Mobile Legends community.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/tournaments"
            className="bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700 inline-block"
          >
            View Tournament
          </Link>

          <Link
            to="/contact"
            className="border border-blue-500 px-8 py-3 rounded-lg inline-block"
          >
            Learn More
          </Link>
        </div>

      </div>

    </section>
  );
}