import { Link } from "react-router-dom";

export default function TournamentCard({ tournament }) {
  if (!tournament) return null;

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">

      <img
        src={tournament.banner_image}
        alt={tournament.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">

        <div className="flex justify-between items-start">

          <div>
            <h3 className="text-2xl font-bold text-white">
              {tournament.title}
            </h3>

            <p className="text-blue-400">
              {tournament.subtitle}
            </p>
          </div>

          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              tournament.status === "Ongoing"
                ? "bg-green-500/20 text-green-400"
                : tournament.status === "Upcoming"
                ? "bg-yellow-500/20 text-yellow-400"
                : "bg-gray-500/20 text-gray-400"
            }`}
          >
            {tournament.status}
          </span>

        </div>

        <div className="mt-6 space-y-3 text-gray-300">

          <p>
            🎮 {tournament.game_name}
          </p>

          <p>
            💰 Prize Pool:
            <span className="text-white ml-2">
              Rs. {Number(tournament.prize_pool).toLocaleString()}
            </span>
          </p>

        </div>

        <Link
          to={`/tournament/${tournament.id}`}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-60"
        >
          View Tournament
        </Link>

      </div>

    </div>
  );
}