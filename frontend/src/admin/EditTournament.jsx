import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

export default function TournamentsAdmin() {

  const [tournaments, setTournaments] = useState([]);
  const [editingTournament, setEditingTournament] = useState(null);

  const fetchTournaments = async () => {
    try {
      const response = await api.get("/tournaments");
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    let isActive = true;

    fetchTournaments().then((data) => {
      if (isActive) {
        setTournaments(data);
      }
    });

    return () => {
      isActive = false;
    };
  }, []);

  const deleteTournament = async (id) => {

    const confirmed = window.confirm(
      "Delete this tournament?"
    );

    if (!confirmed) return;

    try {

      await api.delete(`/tournaments/${id}`);

      setTournaments(
        tournaments.filter(
          (t) => t.id !== id
        )
      );

    } catch (error) {
      console.error(error);
    }
  };

  const updateTournament = async () => {

    try {

      await api.put(
        `/tournaments/${editingTournament.id}`,
        editingTournament
      );

      alert("Tournament Updated Successfully");

      setEditingTournament(null);

      const data = await fetchTournaments();
      setTournaments(data);

    } catch (error) {

      console.error(error);
      alert("Update Failed");

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
                Prize Pool:
                Rs. {Number(tournament.prize_pool || 0).toLocaleString()}
              </p>

            </div>

            <div className="flex gap-3">

              <button
                onClick={() =>
                  setEditingTournament(tournament)
                }
                className="bg-yellow-600 px-4 py-2 rounded-lg"
              >
                Edit
              </button>

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

      {editingTournament && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">

          <div className="bg-zinc-900 p-8 rounded-xl w-[700px]">

            <h2 className="text-3xl font-bold mb-6">
              Edit Tournament
            </h2>

            <input
              value={editingTournament.title}
              onChange={(e) =>
                setEditingTournament({
                  ...editingTournament,
                  title: e.target.value
                })
              }
              className="w-full p-3 bg-zinc-800 rounded-lg mb-4"
              placeholder="Title"
            />

            <input
              value={editingTournament.subtitle || ""}
              onChange={(e) =>
                setEditingTournament({
                  ...editingTournament,
                  subtitle: e.target.value
                })
              }
              className="w-full p-3 bg-zinc-800 rounded-lg mb-4"
              placeholder="Subtitle"
            />

            <textarea
              value={editingTournament.description || ""}
              onChange={(e) =>
                setEditingTournament({
                  ...editingTournament,
                  description: e.target.value
                })
              }
              className="w-full p-3 bg-zinc-800 rounded-lg mb-4"
              rows="4"
              placeholder="Description"
            />

            <input
              type="number"
              value={editingTournament.prize_pool || ""}
              onChange={(e) =>
                setEditingTournament({
                  ...editingTournament,
                  prize_pool: e.target.value
                })
              }
              className="w-full p-3 bg-zinc-800 rounded-lg mb-4"
              placeholder="Prize Pool"
            />
            <select
              name="tournament_format"
              value={editingTournament.tournament_format}
              onChange={(e) =>
                setEditingTournament({
                  ...editingTournament,
                  tournament_format: e.target.value
                })
              }
              className="w-full p-3 bg-zinc-800 rounded-lg mb-4"
            >
              <option value="Bracket Only">
                Bracket Only
              </option>

              <option value="Round Robin + Bracket">
                Round Robin + Bracket
              </option>
            </select>
            <select
              value={editingTournament.status}
              onChange={(e) =>
                setEditingTournament({
                  ...editingTournament,
                  status: e.target.value
                })
              }
              className="w-full p-3 bg-zinc-800 rounded-lg mb-4"
            >
              <option value="Upcoming">
                Upcoming
              </option>

              <option value="Ongoing">
                Ongoing
              </option>

              <option value="Completed">
                Completed
              </option>
            </select>

            <div className="flex gap-3">

              <button
                onClick={updateTournament}
                className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-lg"
              >
                Save Changes
              </button>

              <button
                onClick={() =>
                  setEditingTournament(null)
                }
                className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-lg"
              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

