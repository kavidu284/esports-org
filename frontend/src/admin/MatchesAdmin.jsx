import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function MatchesAdmin() {

  const [tournaments, setTournaments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await api.get("/tournaments");
        setTournaments(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    void fetchTournaments();
  }, []);
const ongoingTournaments = tournaments.filter(
  (tournament) => tournament.status === "Ongoing"
);
  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Matches
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {ongoingTournaments.length === 0 && (
          <div className="bg-zinc-900 p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-2">
              No Ongoing Tournaments
            </h2>

            <p className="text-gray-400">
              Start a tournament to manage matches.
            </p>
          </div>
        )}
        {ongoingTournaments.map((tournament) => (

          <div
            key={tournament.id}
            className="bg-zinc-900 p-6 rounded-xl border border-zinc-800"
          >

            <h2 className="text-2xl font-bold mb-3">
              {tournament.title}
            </h2>

            <p className="text-gray-400 mb-4">
              {tournament.status}
            </p>

            <button
              onClick={() =>
                navigate(`/admin/tournament/${tournament.id}/matches`)
              }
              className="bg-blue-600 px-4 py-2 rounded-lg"
            >
              Manage Matches
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}