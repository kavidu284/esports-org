import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function TournamentDetails() {

  const { id } = useParams();

  const [tournament, setTournament] = useState(null);

  useEffect(() => {
    const fetchTournament = async () => {
      try {
        const response = await api.get(`/tournaments/${id}`);
        setTournament(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    
    if (id) {
      void fetchTournament();
  
    }
  }, [id]);

  if (!tournament) {
    return (
      <div className="text-center py-20 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-white">

      <img
          src={
            tournament.banner_image ||
            "https://placehold.co/1200x500"
          }
          alt={tournament.title}
          className="w-full h-96 object-cover rounded-2xl"
        />

      <h1 className="text-5xl font-bold mt-8">
        {tournament.title}
      </h1>

      <p className="text-blue-400 text-xl mt-2">
        {tournament.subtitle}
      </p>

      <div className="mt-8 space-y-4">

        <p>
          🎮 {tournament.game_name}
        </p>

        <p>
          💰 Prize Pool:
          Rs. {Number(tournament.prize_pool).toLocaleString()}
        </p>

        <p>
          📌 Status:
          <span className="ml-2 text-blue-400">
            {tournament.status}
          </span>
        </p>

      </div>
      <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

        <h2 className="text-2xl font-bold mb-4">
          Tournament Rules
        </h2>

        <p className="text-gray-400 mb-4">
          Please read the official tournament rules before
          registering for this event.
        </p>

        <Link
          to="/rules"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-60"
        >
          View Rules
        </Link>

      </div>
      <div className="mt-10">

        <h2 className="text-3xl font-bold mb-4">
          About Tournament
        </h2>

        <p className="text-gray-300">
          {tournament.description}
        </p>

        

      </div>
      <div className="mt-10 flex flex-wrap gap-4">

        {tournament.show_registration && (
          <Link
            to={`/register/${tournament.id}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-60"
          >
            Register Team
          </Link>
          
        )}
        <Link
          to={`/tournament/${tournament.id}/view`}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-700"
        >
          View Tournament
        </Link>
     

      </div>

    </div>
  );
}