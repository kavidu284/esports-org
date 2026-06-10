import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

export default function TournamentsAdmin() {

  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await api.get("/tournaments");

            console.log("API DATA:", response.data);
            setTournaments(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTournaments();
  }, []);
  const deleteTournament = async (id) => {

  const confirmed = window.confirm(
    "Delete this tournament?"
  );

  if (!confirmed) return;

  try {

    await api.delete(
      `/tournaments/${id}`
    );

    setTournaments(
      tournaments.filter(
        (t) => t.id !== id
      )
    );

  } catch (error) {
    console.error(error);
  }
};


  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          Tournaments
        </h1>

        <Link to="/admin/tournaments/create">
          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg">
            + New Tournament
          </button>
        </Link>

      </div>

      <div className="space-y-4">

        {tournaments.map((tournament) => (

          <div
            key={tournament.id}
            className="bg-zinc-900 p-6 rounded-xl flex justify-between items-center"
          >

            <div>

              <h2 className="text-2xl font-bold">
                {tournament.title}
              </h2>

              <p className="text-gray-400">
                Status: {tournament.status}
              </p>

              <p className="text-gray-400">
                Prize Pool: Rs. {tournament.prize_pool.toLocaleString()}
              </p>

            </div>

            <div className="flex gap-3">

              <Link
                    to={`/admin/tournaments/edit/${tournament.id}`}
                    >
                    <button className="bg-yellow-600 px-4 py-2 rounded-lg">
                        Edit
                    </button>
            </Link>

             <button
                onClick={() =>
                    deleteTournament(tournament.id)
                }
                className="bg-red-600 px-4 py-2 rounded-lg"
                >
                Delete
            </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}